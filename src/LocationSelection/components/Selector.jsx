import { useSelectorLocation } from '../Hooks/useSelectorLocation'

export const Selector = () => {
  const { loading, filteredLocations, setSearch, isSelected, handleSelect, search } = useSelectorLocation()
  return (
    loading
      ? <div className='w-[90%] h-[300px] flex justify-center items-center'><p>Loading...</p></div>
      : <div className='border-[1px] shadow-md px-3 py-3 rounded-lg w-[99%] max-w-[600px]'>
          <div className='flex px-3 items-center gap-1 border-[1px] h-[32px] rounded-md'>
            <img src='../../../public/LocationSelectionImages/Prefix.svg' className='w-5 h-5' alt="" />
            <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} className='w-full outline-none' />
          </div>
          <div className='mt-3 flex flex-col gap-2'>
            {filteredLocations?.map((location) => (
              <div
              onClick={() => handleSelect(location)}
              key={location.id}
              className={`${isSelected.location === location ? 'bg-[#EBEBEB] font-semibold' : ''} cursor-pointer font-inter flex items-center gap-3 py-1 px-2 rounded-md hover:bg-[#EBEBEB]`}>
                  <p className='text-[#2E2E2E]'>{location.description}</p>
              </div>
            ))}
          </div>
    </div>

  )
}
