import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

export const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container"> 
            <a href="/">
                <img src={headerLogo} alt="logo" width={129} height={29}></img>
            </a>

            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((Links)=>(
                    <li key={Links.label}>
                        <a className="font-montserrat leading-normal text-lg text-slate-gray hover:text-blue-800 font-medium" href={Links.href}>{Links.label}</a>
                    </li>
              ))}

            </ul>

            <div className="hidden max-lg:block">
                <img src={hamburger} width={25} height={25}></img>
            </div>
        </nav>
    </header>
  )
}


