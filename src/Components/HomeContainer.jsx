import React, { useEffect, useRef } from "react"
import Typed from "typed.js"
import { Link } from "react-scroll"
import me from "../Images/me.png"

const HomeContainer = () => {
  const element = useRef(null)

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [
        "Hi, my name is Hamza",
        "I'm a Frontend Developer...",
        "thanks for being here.",
      ],
      typeSpeed: 50,
      backSpeed: 40,
      loop: false,
      showCursor: false,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div
      className="lg:w-full lg:h-[100vh] sm:w-screen sm:h-[calc(100vh-64px)] dark:bg-dark_blue flex items-center justify-center duration-300 z-0 sm:px-1 lg:px-0"
      id="home"
    >
      <div className="lg:w-[1200px] lg:h-full sm:w-full flex lg:items-center lg:justify-between  lg:flex-row sm:flex-col sm:items-center">
        <div className="lg:max-w-[60%] sm:w-full flex sm:flex-col sm:items-center lg:items-start sm:justify-center ">
          <h1
            className="lg:text-5xl sm:text-xl font-extrabold dark:text-dark_tc mb-2"
            ref={element}
          ></h1>
          <p className="dark:text-dark_tc my-4" role="paragraph">
            Welcome to my Website.
          </p>
          <Link
            to="contact"
            className="cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button className="border-2 border-orange p-3 rounded-lg text-orange hover:bg-orange hover:text-dark_tc duration-300">
              Contact
            </button>
          </Link>
        </div>
        <div className="lg:w-[400px] lg:h-[400px] max-w-[400px] max-h-[400px] relative">
          <img
            src={me}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute flex lg:flex-col lg:bottom-0 lg:-left-12">
            <a
              href="https://www.linkedin.com/in/hamzamirza-frontenddev/"
              target="blank"
              name="LinkedIn"
              className="flex items-center opacity-50 hover:opacity-100 duration-300"
            >
              <i className="fa-brands fa-linkedin text-3xl text-orange  cursor-pointer"></i>
              <p className="ml-2 text-orange">LinkedIn</p>
            </a>
            <a
              href="https://github.com/devham236"
              target="blank"
              name="Github"
              className="lg:mt-5 lg:ml-0 sm:ml-5 flex items-center opacity-50 hover:opacity-100 duration-300"
            >
              <i className="fa-brands fa-github text-3xl text-orange  cursor-pointer"></i>
              <p className="ml-2 text-orange">Github</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContainer
