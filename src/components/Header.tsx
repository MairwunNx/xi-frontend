import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Тарифы', href: '/pricing' },
    { name: 'О компании', href: '/about' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-dark-950/80 backdrop-blur-lg border-b border-dark-800">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-white">习</span>
            </div>
            <span className="text-xl font-bold text-white">
              Xi <span className="gradient-text">Manager</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-primary-500/10 text-primary-400'
                    : 'text-gray-300 hover:text-white hover:bg-dark-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://t.me/ximanager_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Открыть бота
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-dark-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-800 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary-500/10 text-primary-400'
                      : 'text-gray-300 hover:text-white hover:bg-dark-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://t.me/ximanager_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Открыть бота
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

