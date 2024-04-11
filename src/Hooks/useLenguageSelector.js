import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import i18next from 'i18next'

export const useLeguageSelector = () => {
  // The sources object contains the paths to the images that represent the languages
  const sources = {
    en: 'LandingImages/Countries/English.webp',
    fr: 'LandingImages/Countries/French.webp',
    pt: 'LandingImages/Countries/Portugese.webp',
    zh: 'LandingImages/Countries/Mandarin.webp',
    hi: 'LandingImages/Countries/Hindi.webp',
    ar: 'LandingImages/Countries/Arabic.webp',
    ru: 'LandingImages/Countries/Russian.webp',
    de: 'LandingImages/Countries/German.webp',
    es: 'LandingImages/Countries/colombia.png'
  }

  // The useLocalStorage hook is used to save the selected language in the local storage
  const { setItem, getItem } = useLocalStorage({ key: 'language' })
  // The selectedLanguage state is used to store the selected language and the open state of the dropdown
  const [selectedLanguage, setSelectedLanguage] = useState({ src: sources.en, open: false })

  // The useEffect hook is used to set the selected language when the component mounts
  useEffect(() => {
    if (getItem()) {
      setSelectedLanguage({ src: sources[getItem()], open: false })
      i18next.changeLanguage(getItem())
    }
  }, [])

  // The lengugesFiltered array is used to filter the languages that are not the selected language
  const lengugesFiltered = Object.keys(sources).filter((key) => key !== i18next.language)

  // The setItem function is used to save the selected language in the local storage
  const handleLanguageSelection = (e) => {
    setItem(e.target.id)
    setSelectedLanguage({ src: sources[e.target.id], open: false })
    i18next.changeLanguage(e.target.id)
  }

  return {
    selectedLanguage,
    setSelectedLanguage,
    sources,
    lengugesFiltered,
    setItem,
    handleLanguageSelection
  }
}
