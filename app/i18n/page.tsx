"use client"

import { useState } from "react"
import { GlobeAltIcon, LanguageIcon } from "@heroicons/react/24/outline"

// Simulação de traduções (normalmente viria de arquivos de tradução)
const translations = {
  "pt-BR": {
    title: "Internacionalização (i18n)",
    subtitle: "Suporte a múltiplos idiomas com Next.js",
    description:
      "Esta página demonstra como implementar internacionalização em uma aplicação Next.js, permitindo suporte a múltiplos idiomas e localizações.",
    currentLanguage: "Idioma Atual",
    selectLanguage: "Selecionar Idioma",
    features: {
      title: "Funcionalidades de i18n",
      items: [
        "Detecção automática do idioma do usuário",
        "URLs localizadas (/pt-BR/pagina, /en-US/page)",
        "Formatação de datas e números por região",
        "Suporte a RTL (Right-to-Left) para idiomas árabes",
        "Carregamento dinâmico de traduções",
        "Fallback para idioma padrão",
      ],
    },
    examples: {
      title: "Exemplos de Localização",
      date: "Data",
      number: "Número",
      currency: "Moeda",
      time: "Horário",
    },
    technical: {
      title: "Implementação Técnica",
      config: "Configuração",
      usage: "Uso",
      configItems: [
        "next.config.js com configuração i18n",
        "Definição de locales suportados",
        "Locale padrão configurado",
        "Detecção automática habilitada",
      ],
      usageItems: [
        "Hook useRouter para locale atual",
        "Componente Link com locale",
        "Formatação com Intl APIs",
        "Carregamento de traduções",
      ],
    },
  },
  "en-US": {
    title: "Internationalization (i18n)",
    subtitle: "Multi-language support with Next.js",
    description:
      "This page demonstrates how to implement internationalization in a Next.js application, enabling support for multiple languages and localizations.",
    currentLanguage: "Current Language",
    selectLanguage: "Select Language",
    features: {
      title: "i18n Features",
      items: [
        "Automatic user language detection",
        "Localized URLs (/pt-BR/pagina, /en-US/page)",
        "Regional date and number formatting",
        "RTL (Right-to-Left) support for Arabic languages",
        "Dynamic translation loading",
        "Fallback to default language",
      ],
    },
    examples: {
      title: "Localization Examples",
      date: "Date",
      number: "Number",
      currency: "Currency",
      time: "Time",
    },
    technical: {
      title: "Technical Implementation",
      config: "Configuration",
      usage: "Usage",
      configItems: [
        "next.config.js with i18n configuration",
        "Supported locales definition",
        "Default locale configured",
        "Automatic detection enabled",
      ],
      usageItems: [
        "useRouter hook for current locale",
        "Link component with locale",
        "Formatting with Intl APIs",
        "Translation loading",
      ],
    },
  },
  "es-ES": {
    title: "Internacionalización (i18n)",
    subtitle: "Soporte multiidioma con Next.js",
    description:
      "Esta página demuestra cómo implementar internacionalización en una aplicación Next.js, permitiendo soporte para múltiples idiomas y localizaciones.",
    currentLanguage: "Idioma Actual",
    selectLanguage: "Seleccionar Idioma",
    features: {
      title: "Características de i18n",
      items: [
        "Detección automática del idioma del usuario",
        "URLs localizadas (/pt-BR/pagina, /en-US/page)",
        "Formateo de fechas y números por región",
        "Soporte RTL (Right-to-Left) para idiomas árabes",
        "Carga dinámica de traducciones",
        "Fallback al idioma predeterminado",
      ],
    },
    examples: {
      title: "Ejemplos de Localización",
      date: "Fecha",
      number: "Número",
      currency: "Moneda",
      time: "Hora",
    },
    technical: {
      title: "Implementación Técnica",
      config: "Configuración",
      usage: "Uso",
      configItems: [
        "next.config.js con configuración i18n",
        "Definición de locales soportados",
        "Locale predeterminado configurado",
        "Detección automática habilitada",
      ],
      usageItems: [
        "Hook useRouter para locale actual",
        "Componente Link con locale",
        "Formateo con APIs Intl",
        "Carga de traducciones",
      ],
    },
  },
}

export default function I18nPage() {
  const [currentLocale, setCurrentLocale] = useState<keyof typeof translations>("pt-BR")
  const t = translations[currentLocale]

  // Função para formatar data de acordo com o locale
  const formatDate = (locale: string) => {
    return new Date().toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    })
  }

  // Função para formatar número de acordo com o locale
  const formatNumber = (locale: string) => {
    return new Intl.NumberFormat(locale).format(1234567.89)
  }

  // Função para formatar moeda de acordo com o locale
  const formatCurrency = (locale: string) => {
    const currencies = {
      "pt-BR": "BRL",
      "en-US": "USD",
      "es-ES": "EUR",
    }
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currencies[locale as keyof typeof currencies],
    }).format(1234.56)
  }

  // Função para formatar horário de acordo com o locale
  const formatTime = (locale: string) => {
    return new Date().toLocaleTimeString(locale)
  }

  return (
    <div className="space-y-8">
      {/* Cabeçalho com seletor de idioma */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-indigo-900 mb-2">{t.title}</h1>
            <p className="text-indigo-800">{t.subtitle}</p>
          </div>

          {/* Seletor de idioma */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-indigo-900">{t.selectLanguage}:</span>
            <select
              value={currentLocale}
              onChange={(e) => setCurrentLocale(e.target.value as keyof typeof translations)}
              className="px-3 py-2 border border-indigo-300 rounded-md bg-white text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="pt-BR">🇧🇷 Português (Brasil)</option>
              <option value="en-US">🇺🇸 English (US)</option>
              <option value="es-ES">🇪🇸 Español (España)</option>
            </select>
          </div>
        </div>

        <p className="text-indigo-800">{t.description}</p>

        <div className="mt-4 p-3 bg-indigo-100 rounded-md">
          <p className="text-sm font-medium text-indigo-900">
            <GlobeAltIcon className="w-4 h-4 inline mr-2" />
            {t.currentLanguage}: {currentLocale}
          </p>
        </div>
      </div>

      {/* Funcionalidades de i18n */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <LanguageIcon className="w-6 h-6 mr-2" />
          {t.features.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.features.items.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Exemplos de localização */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.examples.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">{t.examples.date}</h3>
            <p className="text-sm text-gray-600">{formatDate(currentLocale)}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">{t.examples.number}</h3>
            <p className="text-sm text-gray-600">{formatNumber(currentLocale)}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">{t.examples.currency}</h3>
            <p className="text-sm text-gray-600">{formatCurrency(currentLocale)}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">{t.examples.time}</h3>
            <p className="text-sm text-gray-600">{formatTime(currentLocale)}</p>
          </div>
        </div>
      </div>

      {/* Implementação técnica */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">{t.technical.title}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">{t.technical.config}:</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              {t.technical.configItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">{t.technical.usage}:</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              {t.technical.usageItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
