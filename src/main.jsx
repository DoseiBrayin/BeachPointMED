import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import { translations } from './Translations/main.js'
import { useLocalStorage } from './Hooks/useLocalStorage.jsx'

const { getItem } = useLocalStorage({ key: 'language' })

i18next.init({
  interpolation: { escapeValue: false },
  lng: (getItem() || 'en'),
  resources: {
    en: {
      global: translations.en
    },
    es: {
      global: translations.es
    },
    fr: {
      global: translations.fr
    },
    pt: {
      global: translations.pt
    },
    ru: {
      global: translations.ru
    },
    de: {
      global: translations.de
    },
    zh: {
      global: translations.zh
    },
    hi: {
      global: translations.hi
    },
    ar: {
      global: translations.ar
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
)
