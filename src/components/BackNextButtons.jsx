import { Link } from 'react-router-dom'

export const BackNextButtons = ({ backURL, nextURL }) => {
  return (
    <div className='w-full flex justify-end max-w-[64.75rem]'>
        <div className='flex gap-3 '>
            <Link className='border-[1px] rounded-md px-2 py-1' to={backURL}>Back</Link>
            <Link className='border-[1px] rounded-md px-2 py-1' to={nextURL}>Next</Link>
        </div>
    </div>
  )
}
