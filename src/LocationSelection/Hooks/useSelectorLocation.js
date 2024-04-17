import { useState } from 'react'
import { useAxios } from '../../API/useAxios'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'

export const useSelectorLocation = () => {
  // Define the url to make the request
  const token = import.meta.env.VITE_BEACHPOINT_API_URL
  const url = `${token}locations/locations/`
  const { data, loading, error } = useAxios({ url })

  // Get the bookCourt state and the setBookCourt function from the context
  const { bookCourt, setBookCourt } = useBookYourCourtContext()

  // Define the search state to search locations
  const [search, setSearch] = useState('')
  // Define the isSelected state to know if a location is selected
  const [isSelected, setIsSelected] = useState({ selected: false, location: {} })

  // Filter the locations that match the search and are active
  const filteredLocations = data?.data
    ? data.data.filter((location) => location.description.toLowerCase().includes(search.toLocaleLowerCase()) && location.active === true)
    : []
  // Function to handle the selection of a location
  const handleSelect = (location) => {
    setIsSelected({ selected: true, location })
    setBookCourt({ ...bookCourt, location })
  }

  return {
    filteredLocations,
    handleSelect,
    setSearch,
    isSelected,
    loading,
    search,
    error
  }
}
