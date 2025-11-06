import { Link } from 'react-router-dom'
import { 
  Bot, 
  Zap, 
  Shield, 
  MessageSquare, 
  Image, 
  Mic, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export const Home = () => {
  const features = [
    {
      icon: Bot,
      title: 'Мощный AI',
      description: 'Доступ к флагманским AI-моделям: GPT-5 Pro, Claude Sonnet 4.5, Gemini 2.5 Pro, Grok 4',
    },
    {
      icon: MessageSquare,
      title: 'Умные диалоги',
      description: 'Контекстное понимание и персонализация ответов под ваши задачи',
    },
    {
      icon: Image,
      title: 'Анализ изображений',
      description: 'Распознавание объектов, текста и детальное описание изображений',
    },
    {
      icon: Mic,
      title: 'Работа с аудио',
      description: 'Транскрибация голосовых сообщений и аудиофайлов в текст',
    },
    {
      icon: Zap,
      title: 'Быстрая обработка',
      description: 'Моментальные ответы и высокая скорость генерации текста',
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Защита ваших данных и конфиденциальность переписки',
    },
  ]

  const plans = [
    {
      name: 'Bronze',
      emoji: '🥉',
      price: 'Бесплатно',
      description: 'Для ознакомления и простых вопросов',
      features: ['Базовые AI-модели', 'Ограниченные лимиты', 'Ограниченная история чата'],
    },
    {
      name: 'Silver',
      emoji: '🥈',
      price: '399',
      currency: '₽',
      period: '/месяц',
      description: 'Для регулярного использования',
      features: ['Продвинутые AI-модели', 'Увеличенные лимиты', 'Анализ изображений'],
      popular: false,
    },
    {
      name: 'Gold',
      emoji: '💎',
      price: '499',
      currency: '₽',
      period: '/месяц',
      description: 'Для активного использования',
      features: ['Флагманские AI-модели', 'Огромнейшие лимиты', 'Приоритетная поддержка'],
      popular: true,
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-8 animate-fade-in">
              <Zap className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-400">Powered by OpenRouter</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
              Ваш личный{' '}
              <span className="gradient-text">AI-помощник</span>
              <br />в Telegram
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Xi Manager — это мощный Telegram-бот с искусственным интеллектом, стилизованный под легендарного Xi Jinping, готовый помочь вам в решении любых задач
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="https://t.me/ximanager_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <Bot className="w-5 h-5" />
                <span>Начать использовать</span>
              </a>
              <Link
                to="/pricing"
                className="btn-secondary flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <span>Смотреть тарифы</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100+</div>
                <div className="text-sm text-gray-400">Активных пользователей</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5 000+</div>
                <div className="text-sm text-gray-400">Обработанных запросов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-sm text-gray-400">Время работы (7д)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-900/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Возможности <span className="gradient-text">Xi Manager</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Все, что нужно для эффективной работы с искусственным интеллектом в одном месте
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Выберите свой <span className="gradient-text">тариф</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Гибкие планы подписки для любых задач и бюджета
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`card relative ${plan.popular ? 'border-primary-500 shadow-xl shadow-primary-500/20' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold rounded-full">
                      Популярный
                    </span>
                  </div>
                )}

                  <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{plan.emoji}</div>
                  <h3 className="text-xl font-semibold mb-1 text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    {plan.currency && <span className="text-gray-400 ml-1">{plan.currency}</span>}
                    {plan.period && <span className="text-gray-400">{plan.period}</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/pricing"
                  className={plan.popular ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}
                >
                  Подробнее
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/pricing" className="text-primary-400 hover:text-primary-300 transition-colors inline-flex items-center space-x-2">
              <span>Посмотреть полное сравнение тарифов</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500/10 via-primary-600/10 to-primary-700/10 border-y border-primary-500/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-primary-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы начать чат с <span className="gradient-text">Xi Manager</span>?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Присоединяйтесь к пользователям, которые уже используют искусственный интеллект для повышения продуктивности
            </p>
            <a
              href="https://t.me/ximanager_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Bot className="w-5 h-5" />
              <span>Открыть бота в Telegram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

