import { useState } from 'react'

export const useUserTable = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(data?.length / itemsPerPage)

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const prevPage = () => {
    if (currentPage === 1) return
    setCurrentPage((prev) => prev - 1)
  }

  const nextPage = () => {
    if (currentPage === totalPages) return
    setCurrentPage((prev) => prev + 1)
  }

  return {
    currentPage,
    totalPages,
    handleClick,
    nextPage,
    prevPage
  }
}
