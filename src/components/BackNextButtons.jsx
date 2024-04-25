import { Link } from 'react-router-dom'
import { useBookYourCourtContext } from '../context/BookYourCourtContext'

export const BackNextButtons = ({ backURL, nextURL }) => {
  const { bookCourt } = useBookYourCourtContext()

  const emptyLocation = bookCourt.location ? nextURL : '#'

  return (
    <div className='w-full flex justify-end max-w-[64.75rem]'>
        <div className='flex gap-3 '>
            <Link className='border-[1px] rounded-md px-2 py-1' to={backURL}>back</Link>
            <Link className='border-[1px] rounded-md px-2 py-1' to={emptyLocation}>next</Link>
        </div>
    </div>
  )
}
