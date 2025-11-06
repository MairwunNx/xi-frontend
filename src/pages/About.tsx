import { Mail, MessageCircle, MapPin, FileText } from 'lucide-react'

export const About = () => {
  return (
    <div className="py-20">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">О компании</h1>
        
        <div className="space-y-8">
          {/* About Section */}
          <section className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">Xi Manager</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Xi Manager — это современный Telegram-бот с искусственным интеллектом, стилизованный 
                под легендарного Председателя Си Цзиньпина. Это исключительно стилизация для создания 
                уникального пользовательского опыта, и не имеет никакого отношения к реальной личности.
              </p>
              <p>
                Мы используем передовые AI-модели через платформу OpenRouter, включая GPT-5, Claude 4.5, 
                Gemini 2.5 Pro и Grok 4, чтобы предоставить вам лучший опыт взаимодействия с искусственным 
                интеллектом.
              </p>
              <p>
                Наша миссия — сделать мощные технологии искусственного интеллекта доступными каждому 
                через удобный и знакомый интерфейс Telegram, добавляя при этом элемент юмора и 
                уникальной стилизации.
              </p>
            </div>
          </section>

          {/* Legal Info */}
          <section className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">Юридическая информация</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Полное наименование</h3>
                <p className="text-white">Индивидуальный предприниматель Ерохин Павел Викторович</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">ИНН</h3>
                <p className="text-white">323305400539</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">ОГРНИП</h3>
                <p className="text-white">321325600044877</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Дата регистрации</h3>
                <p className="text-white">05.10.2021</p>
              </div>
            </div>
          </section>

          {/* Contacts */}
          <section className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">Контактная информация</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-1">Адрес</h3>
                  <p className="text-white">Брянская область, город Брянск</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-1">Email</h3>
                  <a href="mailto:personal@mairwunnx.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                    personal@mairwunnx.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-1">Telegram</h3>
                  <a href="https://t.me/MairwunNx" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">
                    @MairwunNx
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Support */}
          <section className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">Техническая поддержка</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Мы всегда готовы помочь вам с любыми вопросами, связанными с использованием Xi Manager.
              </p>
              <div className="bg-dark-800 p-4 rounded-lg border border-dark-700">
                <p className="text-sm mb-2 text-gray-400">Время работы поддержки:</p>
                <p className="text-white">Понедельник - Пятница: 10:00 - 19:00 (МСК)</p>
                <p className="text-white">Суббота - Воскресенье: Выходной</p>
                <p className="text-sm text-gray-400 mt-2">Среднее время ответа: до 24 часов</p>
              </div>
              <p>
                Для Gold подписчиков доступна приоритетная поддержка через Telegram.
              </p>
            </div>
          </section>

          {/* Documents */}
          <section className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">Документы</h2>
            <div className="space-y-3">
              <a href="/public-offer" className="flex items-center space-x-3 p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors">
                <FileText className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-white font-medium">Публичная оферта</p>
                  <p className="text-sm text-gray-400">Условия оказания услуг</p>
                </div>
              </a>

              <a href="/privacy-policy" className="flex items-center space-x-3 p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors">
                <FileText className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-white font-medium">Политика конфиденциальности</p>
                  <p className="text-sm text-gray-400">Обработка персональных данных</p>
                </div>
              </a>
            </div>
          </section>

          {/* Payment Info */}
          <section className="card">
            <h2 className="text-2xl font-semibold text-white mb-4">Прием платежей</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Оплата услуг осуществляется через платежную систему Т-Банк. Мы принимаем 
                банковские карты Visa, Mastercard и МИР.
              </p>
              <div className="flex items-center space-x-4">
                <div className="px-4 py-2 bg-dark-800 rounded-lg border border-dark-700">
                  <span className="text-white font-semibold">VISA</span>
                </div>
                <div className="px-4 py-2 bg-dark-800 rounded-lg border border-dark-700">
                  <span className="text-white font-semibold">Mastercard</span>
                </div>
                <div className="px-4 py-2 bg-dark-800 rounded-lg border border-dark-700">
                  <span className="text-white font-semibold">МИР</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Все платежи обрабатываются в соответствии с требованиями PCI DSS и защищены 
                современными методами шифрования.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

