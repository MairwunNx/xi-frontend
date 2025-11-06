FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM nginx:1.27-alpine
WORKDIR /usr/share/nginx/html
RUN adduser -D -s /bin/sh -u 1000 ximanager && \
    chown -R ximanager:ximanager /usr/share/nginx/html && \
    chown -R ximanager:ximanager /var/cache/nginx && \
    chown -R ximanager:ximanager /var/log/nginx && \
    chown -R ximanager:ximanager /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R ximanager:ximanager /var/run/nginx.pid
COPY --from=builder --chown=ximanager:ximanager /app/dist /usr/share/nginx/html
COPY --chown=ximanager:ximanager nginx.conf /etc/nginx/conf.d/default.conf
USER ximanager
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80 || exit 1
CMD ["nginx", "-g", "daemon off;"]
