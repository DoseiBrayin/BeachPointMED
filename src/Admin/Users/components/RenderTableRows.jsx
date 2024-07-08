const tdStyle = 'text-start font-normal text-[14px] text-[#5D6679]'

export const RenderTableRows = ({ currentPage, itemsPerPage, data }) => {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const itemsToDisplay = data?.slice(startIndex, endIndex)
  return itemsToDisplay.map((item) => (
      <tr className='h-[55px] border-[1px] border-[#E8F1FD]' key={item.cedula}>
        <td className={`${tdStyle} pl-6`}>{item.name}</td>
        <td className='text-start text-[14px]'>{item.type_rol}</td>
        <td className={tdStyle}>August 10, 2024</td>
        <td className={tdStyle}>300.650 COP</td>
        <td className={tdStyle}>
          <img className="cursor-pointer" src="/three_dots.svg" alt="" />
        </td>
      </tr>
  ))
}
