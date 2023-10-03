import React, { useContext } from "react"
import { Context } from "../Context"
import { Link } from "react-scroll"
import HM from "../Images/HM.png"
import me from "../Images/me.png"

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(Context)

  return (
    <div className="lg:w-full sm:w-screen h-16 shadow-xl flex items-center justify-center dark:bg-dark_blue bg-white duration-300 sticky top-0 z-50">
      <div className="lg:w-[1200px] sm:w-full h-full flex items-center justify-between sm:px-1 lg:px-0">
        <div className="lg:w-[50px] lg:h-[50px] sm:w-[35px] sm:h-[35px] cursor-pointer bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <img src={me} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="lg:w-[400px] sm:w-[55%] h-full flex items-center justify-between text-light_tc dark:text-dark_tc">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="lg:text-xl sm:text-sm font-semibold cursor-pointer hover:text-orange  duration-200"
            role="link"
          >
            Home
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className="lg:text-xl sm:text-sm font-semibold cursor-pointer hover:text-orange duration-300"
            role="link"
          >
            Skills
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="lg:text-xl sm:text-sm font-semibold cursor-pointer hover:text-orange duration-300"
            role="link"
          >
            Contact
          </Link>
        </div>
        <div
          className={`lg:w-[55px] lg:h-[30px] sm:w-[45px] sm:h-[25px] rounded-full bg-orange flex flex-row p-1 cursor-pointer duration-300 items-center justify-between ${
            darkMode && "flex-row-reverse"
          }`}
          onClick={() => setDarkMode(!darkMode)}
          role="toggle"
          name={`${darkMode ? "dark" : "light"}`}
        >
          <div className="w-1/2 h-full rounded-full bg-white"></div>
          <i
            className={`fa-solid fa-${
              darkMode ? "moon" : "sun"
            } lg:text-xl sm:text-base text-dark_tc`}
          ></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar
