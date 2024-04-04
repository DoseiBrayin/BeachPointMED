import { NavLink } from "react-router-dom"


export const Navbar = () => {
  const navLinkStyle = 'text-[#2E2E2E]'
  return (
    <nav className="min-[300px]:px-[15px] min-[300px]:h-[56px] min-[900px]:h-[110px] flex justify-between items-center px-[115px] ">
      <button>
        <img src="/LandingImages/Logo.webp" className="w-[3rem]" />
      </button>
      {/* este es el diseno que se ve en pantallas grandes */}
      <div className="hidden min-[900px]:flex gap-[30px]">
        <div className="flex gap-[30px]">
          <NavLink className={navLinkStyle} to="/home">Home</NavLink>
          <NavLink className={navLinkStyle} to="/home">Reserve Now</NavLink>
          <NavLink className={navLinkStyle} to="/home">About Us</NavLink>
          <NavLink className={navLinkStyle} to="/home">Contact Us</NavLink>
          <NavLink className={navLinkStyle} to="/home">My Reservations</NavLink>
        </div>
        Colombia
        <button>
          Profile
        </button>
      </div>
      {/* Este es el diseno qeu se ve en pantallas pequenas */}
      <div className="hidden min-[300px]:block min-[900px]:hidden">
          Colombia
          Nav
      </div>
    </nav>
  )
}