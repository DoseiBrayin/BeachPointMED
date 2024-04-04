import { Link } from "react-router-dom"

export function NavBar() {
    return (
        <nav className='bg-blue-500 text-white p-4 shadow-md flex justify-between'>
            <h1 className='text-2xl'>NavBar</h1>
            <ul className='flex justify-between gap-5'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}