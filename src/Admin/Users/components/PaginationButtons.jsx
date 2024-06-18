export const PaginationButtons = ({ currentPage, totalPages, handleClick, prevPage, nextPage }) => {
  const pagSelectedStyle = 'text-[#1366D9] text-[14px] px-4 py-2 font-medium rounded-lg bg-[#F7F9FC]'
  const pagNotSelectedStyle = 'text-[#858D9D] text-[14px] px-4 py-2 font-medium rounded-lg'
  const buttons = []
  for (let i = 1; i <= totalPages; i++) {
    buttons.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          disabled={i === currentPage}
          className={currentPage === i ? pagSelectedStyle : pagNotSelectedStyle}
        >
          {i}
        </button>
    )
  }
  return (
      <div className='flex w-ful justify-between mt-10 px-10'>
        <button
          className={currentPage === 1
            ? 'cursor-default opacity-25 flex gap-2 border-[1px] justify-center items-center px-2 rounded-md text-[#667085]'
            : 'flex gap-2 border-[1px] justify-center items-center px-2 rounded-md text-[#667085]'}
          onClick={() => prevPage()}
        >
          <img src="/AdminPagination/left.svg" alt="" />
          Previous
        </button>
        <div className='max-w-[40%] w-full flex justify-between lg:max-w-[30%]'>
          {buttons}
        </div>
        <button
          className={currentPage === totalPages ? 'cursor-default opacity-25 flex gap-2 border-[1px] justify-center items-center px-2 rounded-md text-[#667085]' : 'flex gap-2 border-[1px] justify-center items-center px-2 rounded-md text-[#667085]'}
          onClick={() => nextPage()}
        >
          Next
          <img src="/AdminPagination/right.svg" alt="" />
        </button>
      </div>
  )
}
