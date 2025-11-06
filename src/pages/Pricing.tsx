import { CheckCircle, X, CreditCard } from 'lucide-react'

export const Pricing = () => {
  const plans = [
    {
      name: 'Bronze',
      emoji: '🥉',
      price: 'Бесплатно',
      description: 'Для ознакомления и простых вопросов',
      features: [
        { name: 'Базовые AI-модели', included: true },
        { name: 'Ограниченные лимиты', included: true },
        { name: 'Ограниченная история чата', included: true },
        { name: 'Анализ изображений', included: false },
        { name: 'Транскрипция аудио', included: false },
        { name: 'Персонализация', included: false },
        { name: 'Режимы поведения бота', included: false },
        { name: 'Приоритетная поддержка', included: false },
      ],
      buttonText: 'Текущий тариф',
      buttonLink: 'https://t.me/ximanager_bot',
    },
    {
      name: 'Silver',
      emoji: '🥈',
      price: '399',
      currency: '₽',
      period: '/месяц',
      description: 'Для регулярного использования и средней сложности вопросов',
      features: [
        { name: 'Продвинутые AI-модели', included: true },
        { name: 'Увеличенные лимиты', included: true },
        { name: 'Увеличенная история чата', included: true },
        { name: 'Анализ изображений', included: true },
        { name: 'Транскрипция аудио', included: true },
        { name: 'Персонализация', included: true },
        { name: 'Ограниченные режимы поведения бота', included: true },
        { name: 'Приоритетная поддержка', included: false },
      ],
      buttonText: 'Оформить подписку',
      buttonLink: 'https://t.me/ximanager_bot',
      popular: false,
    },
    {
      name: 'Gold',
      emoji: '💎',
      price: '499',
      currency: '₽',
      period: '/месяц',
      description: 'Для активного использования и сложных вопросов',
      features: [
        { name: 'Флагманские AI-модели', included: true },
        { name: 'Огромнейшие лимиты', included: true },
        { name: 'Огромнейшая история чата', included: true },
        { name: 'Улучшенный анализ изображений', included: true },
        { name: 'Транскрипция аудио', included: true },
        { name: 'Персонализация', included: true },
        { name: 'Расширенные режимы поведения бота', included: true },
        { name: 'Приоритетная поддержка', included: true },
      ],
      buttonText: 'Оформить подписку',
      buttonLink: 'https://t.me/ximanager_bot',
      popular: true,
    },
  ]

  const comparisonFeatures = [
    {
      category: 'AI-модели', items: [
        { name: 'GPT-4.1', bronze: true, silver: true, gold: true },
        { name: 'Claude 3.5/3.7 Sonnet', bronze: true, silver: true, gold: true },
        { name: 'Gemini 2.5 Flash', bronze: true, silver: false, gold: false },
        { name: 'Gemini 2.5 Pro', bronze: false, silver: true, gold: true },
        { name: 'GPT-5 Pro', bronze: false, silver: false, gold: true },
        { name: 'Claude Sonnet 4/4.5', bronze: false, silver: false, gold: true },
        { name: 'Grok 4', bronze: false, silver: false, gold: true },
      ]
    },
    {
      category: 'Лимиты на запросы', items: [
        { name: 'Сообщений в день', bronze: '40', silver: '150', gold: '300' },
        { name: 'Сообщений в месяц', bronze: '300', silver: '600', gold: '1500' },
        { name: 'Контекст (токенов)', bronze: '40K', silver: '70K', gold: '160K' },
        { name: 'История сообщений', bronze: '25', silver: '40', gold: '60' },
        { name: 'Время хранения контекста', bronze: '30 мин', silver: '2 часа', gold: '6 часов' },
      ]
    },
    {
      category: 'Изображения', items: [
        { name: 'Анализ изображений в день', bronze: '0', silver: '7', gold: '20' },
        { name: 'Анализ изображений в месяц', bronze: '0', silver: '35', gold: '100' },
        { name: 'Модель для анализа', bronze: '—', silver: 'GPT-4.1', gold: 'O1' },
      ]
    },
    {
      category: 'Аудио', items: [
        { name: 'Транскрипций в день', bronze: '0', silver: '30', gold: '140' },
        { name: 'Транскрипций в месяц', bronze: '0', silver: '170', gold: '300' },
        { name: 'Модель Whisper', bronze: '—', silver: 'Whisper-1', gold: 'Whisper-1' },
      ]
    },
    {
      category: 'Дополнительно', items: [
        { name: 'Персонализация ответов', bronze: false, silver: true, gold: true },
        { name: 'Reasoning effort', bronze: 'medium', silver: 'medium', gold: 'high' },
        { name: 'Приоритетная поддержка', bronze: false, silver: false, gold: true },
      ]
    },
  ]

  const paymentSystems = [
    {
      name: 'VISA',
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="80" style={{ padding: '20px' }} viewBox="0 0 1000 324.68"><path fill="#ffffff" d="m651.19.5c-70.93,0-134.32,36.77-134.32,104.69,0,77.9,112.42,83.28,112.42,122.42,0,16.48-18.88,31.23-51.14,31.23-45.77,0-79.98-20.61-79.98-20.61l-14.64,68.55s39.41,17.41,91.73,17.41c77.55,0,138.58-38.57,138.58-107.66,0-82.32-112.89-87.54-112.89-123.86,0-12.91,15.5-27.05,47.66-27.05,36.29,0,65.89,14.99,65.89,14.99l14.33-66.2S696.61.5,651.18.5h0ZM2.22,5.5L.5,15.49s29.84,5.46,56.72,16.36c34.61,12.49,37.07,19.77,42.9,42.35l63.51,244.83h85.14L379.93,5.5h-84.94l-84.28,213.17-34.39-180.7c-3.15-20.68-19.13-32.48-38.68-32.48,0,0-135.41,0-135.41,0Zm411.87,0l-66.63,313.53h81L494.85,5.5h-80.76Zm451.76,0c-19.53,0-29.88,10.46-37.47,28.73l-118.67,284.8h84.94l16.43-47.47h103.48l9.99,47.47h74.95L934.12,5.5h-68.27Zm11.05,84.71l25.18,117.65h-67.45l42.28-117.65h0Z" /></svg>
      )
    },
    {
      name: 'Mastercard',
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="80" style={{ padding: '20px' }} viewBox="0 0 999.2 776">
          <path fill="#ffffff" d="M181.1,774.3v-51.5c0-19.7-12-32.6-32.6-32.6
	c-10.3,0-21.5,3.4-29.2,14.6c-6-9.4-14.6-14.6-27.5-14.6c-8.6,0-17.2,2.6-24,12v-10.3h-18v82.4h18v-45.5c0-14.6,7.7-21.5,19.7-21.5
	s18,7.7,18,21.5v45.5h18v-45.5c0-14.6,8.6-21.5,19.7-21.5c12,0,18,7.7,18,21.5v45.5H181.1z M448.1,691.9h-29.2V667h-18v24.9h-16.3
	v16.3h16.3v37.8c0,18.9,7.7,30,28.3,30c7.7,0,16.3-2.6,22.3-6l-5.2-15.5c-5.2,3.4-11.2,4.3-15.5,4.3c-8.6,0-12-5.2-12-13.7v-36.9
	h29.2V691.9z M600.9,690.1c-10.3,0-17.2,5.2-21.5,12v-10.3h-18v82.4h18v-46.4c0-13.7,6-21.5,17.2-21.5c3.4,0,7.7,0.9,11.2,1.7
	l5.2-17.2C609.4,690.1,604.3,690.1,600.9,690.1L600.9,690.1z M370,698.7c-8.6-6-20.6-8.6-33.5-8.6c-20.6,0-34.3,10.3-34.3,26.6
	c0,13.7,10.3,21.5,28.3,24l8.6,0.9c9.4,1.7,14.6,4.3,14.6,8.6c0,6-6.9,10.3-18.9,10.3c-12,0-21.5-4.3-27.5-8.6l-8.6,13.7
	c9.4,6.9,22.3,10.3,35.2,10.3c24,0,37.8-11.2,37.8-26.6c0-14.6-11.2-22.3-28.3-24.9l-8.6-0.9c-7.7-0.9-13.7-2.6-13.7-7.7
	c0-6,6-9.4,15.5-9.4c10.3,0,20.6,4.3,25.8,6.9L370,698.7L370,698.7z M848.9,690.1c-10.3,0-17.2,5.2-21.5,12v-10.3h-18v82.4h18v-46.4
	c0-13.7,6-21.5,17.2-21.5c3.4,0,7.7,0.9,11.2,1.7L861,691C857.5,690.1,852.4,690.1,848.9,690.1L848.9,690.1z M618.9,733.1
	c0,24.9,17.2,42.9,43.8,42.9c12,0,20.6-2.6,29.2-9.4l-8.6-14.6c-6.9,5.2-13.7,7.7-21.5,7.7c-14.6,0-24.9-10.3-24.9-26.6
	c0-15.5,10.3-25.8,24.9-26.6c7.7,0,14.6,2.6,21.5,7.7l8.6-14.6c-8.6-6.9-17.2-9.4-29.2-9.4C636.1,690.1,618.9,708.2,618.9,733.1
	L618.9,733.1L618.9,733.1z M785.4,733.1v-41.2h-18v10.3c-6-7.7-14.6-12-25.8-12c-23.2,0-41.2,18-41.2,42.9c0,24.9,18,42.9,41.2,42.9
	c12,0,20.6-4.3,25.8-12v10.3h18V733.1L785.4,733.1z M719.3,733.1c0-14.6,9.4-26.6,24.9-26.6c14.6,0,24.9,11.2,24.9,26.6
	c0,14.6-10.3,26.6-24.9,26.6C728.8,758.8,719.3,747.6,719.3,733.1L719.3,733.1z M503.9,690.1c-24,0-41.2,17.2-41.2,42.9
	c0,25.8,17.2,42.9,42.1,42.9c12,0,24-3.4,33.5-11.2l-8.6-12.9c-6.9,5.2-15.5,8.6-24,8.6c-11.2,0-22.3-5.2-24.9-19.7h60.9
	c0-2.6,0-4.3,0-6.9C542.5,707.3,527,690.1,503.9,690.1L503.9,690.1L503.9,690.1z M503.9,705.6c11.2,0,18.9,6.9,20.6,19.7h-42.9
	C483.3,714.2,491,705.6,503.9,705.6L503.9,705.6z M951.1,733.1v-73.8h-18v42.9c-6-7.7-14.6-12-25.8-12c-23.2,0-41.2,18-41.2,42.9
	c0,24.9,18,42.9,41.2,42.9c12,0,20.6-4.3,25.8-12v10.3h18V733.1L951.1,733.1z M885,733.1c0-14.6,9.4-26.6,24.9-26.6
	c14.6,0,24.9,11.2,24.9,26.6c0,14.6-10.3,26.6-24.9,26.6C894.4,758.8,885,747.6,885,733.1L885,733.1z M282.4,733.1v-41.2h-18v10.3
	c-6-7.7-14.6-12-25.8-12c-23.2,0-41.2,18-41.2,42.9c0,24.9,18,42.9,41.2,42.9c12,0,20.6-4.3,25.8-12v10.3h18V733.1L282.4,733.1z
	 M215.5,733.1c0-14.6,9.4-26.6,24.9-26.6c14.6,0,24.9,11.2,24.9,26.6c0,14.6-10.3,26.6-24.9,26.6
	C224.9,758.8,215.5,747.6,215.5,733.1z"/>
<g>
	<rect x="364" y="66.1" fill="#FF5A00" width="270.4" height="485.8"/>
	<path fill="#EB001B" d="M382,309c0-98.7,46.4-186.3,117.6-242.9
		C447.2,24.9,381.1,0,309,0C138.2,0,0,138.2,0,309s138.2,309,309,309c72.1,0,138.2-24.9,190.6-66.1C428.3,496.1,382,407.7,382,309z"
		/>
	<path fill="#F79E1B" d="M999.2,309c0,170.8-138.2,309-309,309
		c-72.1,0-138.2-24.9-190.6-66.1c72.1-56.7,117.6-144.2,117.6-242.9S570.8,122.7,499.6,66.1C551.9,24.9,618,0,690.1,0
		C861,0,999.2,139.1,999.2,309z"/>
</g>
</svg>
      )
    },
    {
      name: 'МИР',
      logo: (
        <svg width="120" height="80" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg"><linearGradient id="a" x1="370" x2="290" gradientUnits="userSpaceOnUse"><stop stop-color="#1F5CD7" /><stop stop-color="#02AEFF" offset="1" /></linearGradient><path d="m31 13h33c3 0 12-1 16 13 3 9 7 23 13 44h2c6-22 11-37 13-44 4-14 14-13 18-13h31v96h-32v-57h-2l-17 57h-24l-17-57h-3v57h-31m139-96h32v57h3l21-47c4-9 13-10 13-10h30v96h-32v-57h-2l-21 47c-4 9-14 10-14 10h-30m142-29v29h-30v-50h98c-4 12-18 21-34 21" fill="#0f754e" /><path d="m382 53c4-18-8-40-34-40h-68c2 21 20 40 39 40" fill="url(#a)" /></svg>
      )
    },
  ]

  return (
    <div className="py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Тарифы и <span className="gradient-text">цены</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Выберите подходящий тариф для ваших задач. Все планы включают доступ к AI-помощнику в Telegram
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card relative flex flex-col ${plan.popular ? 'border-primary-500 shadow-2xl shadow-primary-500/20 scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold rounded-full shadow-lg">
                    Рекомендуем
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-5xl mb-3">{plan.emoji}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-4 min-h-[40px]">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.currency && <span className="text-gray-400 ml-1 text-xl">{plan.currency}</span>}
                  {plan.period && <span className="text-gray-400 ml-1">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    {feature.included ? (
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${plan.popular ? 'btn-primary' : 'btn-secondary'} w-full text-center`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Детальное <span className="gradient-text">сравнение</span> тарифов
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-800">
                  <th className="text-left py-4 px-6 text-gray-400 font-semibold">Характеристика</th>
                  <th className="text-center py-4 px-6 text-gray-400 font-semibold">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-1">🥉</span>
                      <span>Bronze</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 text-gray-400 font-semibold">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-1">🥈</span>
                      <span>Silver</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 text-gray-400 font-semibold">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-1">💎</span>
                      <span>Gold</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, catIndex) => (
                  <>
                    <tr key={`cat-${catIndex}`} className="bg-dark-900/50">
                      <td colSpan={4} className="py-3 px-6 font-semibold text-primary-400 text-sm uppercase tracking-wide">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr key={`item-${catIndex}-${itemIndex}`} className="border-b border-dark-800 hover:bg-dark-900/30 transition-colors">
                        <td className="py-4 px-6 text-gray-300">{item.name}</td>
                        <td className="py-4 px-6 text-center">
                          {typeof item.bronze === 'boolean' ? (
                            item.bronze ? (
                              <CheckCircle className="w-5 h-5 text-primary-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-600 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-400">{item.bronze}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {typeof item.silver === 'boolean' ? (
                            item.silver ? (
                              <CheckCircle className="w-5 h-5 text-primary-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-600 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-400">{item.silver}</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {typeof item.gold === 'boolean' ? (
                            item.gold ? (
                              <CheckCircle className="w-5 h-5 text-primary-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-600 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-400">{item.gold}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Info */}
        <div className="mt-16 max-w-3xl mx-auto space-y-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-white">Условия оплаты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Оплата производится ежемесячно автоматически</li>
              <li>• Первые 3 дня для новых пользователей - Gold подписка бесплатно</li>
              <li>• Отмена подписки в любой момент без комиссий</li>
              <li>• Безопасная оплата через Т-Банк</li>
              <li>• Все цены указаны с учетом НДС</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center space-x-2">
              <CreditCard className="w-5 h-5 text-primary-400" />
              <span>Принимаем к оплате</span>
            </h3>
            <div className="flex items-center space-x-4 flex-wrap gap-4">
              {paymentSystems.map((system, index) => (
                <div
                  key={index}
                  className="w-32 h-20 bg-dark-800 rounded-lg border border-dark-700 flex items-center justify-center hover:border-primary-500/50 transition-colors"
                >
                  <div className="text-white w-full h-full p-4 flex items-center justify-center">
                    {system.logo}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Все платежи обрабатываются в соответствии с требованиями PCI DSS и защищены современными методами шифрования.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
