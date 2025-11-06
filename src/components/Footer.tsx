import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Github } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Главная', href: '/' },
      { name: 'Тарифы', href: '/pricing' },
      { name: 'О компании', href: '/about' },
    ],
    legal: [
      { name: 'Публичная оферта', href: '/public-offer' },
      { name: 'Политика конфиденциальности', href: '/privacy-policy' },
    ],
    social: [
      { name: 'Telegram', href: 'https://t.me/ximanager_bot', icon: MessageCircle },
      { name: 'Email', href: 'mailto:personal@mairwunnx.com', icon: Mail },
      { name: 'GitHub', href: 'https://github.com/MairwunNx/xi', icon: Github },
    ],
  }

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 group mb-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">习</span>
              </div>
              <span className="text-xl font-bold text-white">
                Xi <span className="gradient-text">Manager</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ваш личный AI-помощник в Telegram. Мощный интеллект для решения любых задач.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Продукт</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Юридическая информация</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors text-sm group"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024-{currentYear} Xi Manager. Все права защищены.
            </p>
            <p className="text-gray-500 text-sm">
              ИП Ерохин Павел Викторович • ИНН: 323305400539
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

