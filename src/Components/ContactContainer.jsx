import React from "react"
import { Link } from "react-scroll"

const ContactContainer = () => {
  return (
    <div
      className="lg:w-full lg:h-[100vh] sm:w-full sm:h-full dark:bg-dark_blue duration-300 flex items-center justify-center sm:px-1 lg:px-0"
      id="contact"
    >
      <div className="lg:w-[1200px] sm:w-full h-full flex flex-col items-center justify-between py-20">
        <div className="flex flex-col items-center">
          <h1 className="lg:text-3xl sm:text-xl font-extrabold mb-1 dark:text-dark_tc">
            Contact
          </h1>
          <p className="text-orange uppercase lg:text-xl sm:text-lg">
            Get in touch
          </p>
        </div>

        <div className="w-full lg:h-[70%] rounded-2xl bg-[#f1f1f1] dark:bg-[#141414] p-8 flex sm:flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:h-full sm:w-full sm:h-1/2 sm:mb-4 lg:mb-0">
            <div className="lg:mb-8 sm:mb-2">
              <h1 className="lg:text-2xl sm:text-base font-extrabold dark:text-dark_tc">
                Information
              </h1>
              <p className="lg:text-xl sm:text-base dark:text-dark_tc opacity-50">
                Location, Email and Phone Number
              </p>
            </div>
            <div className="flex flex-col lg:mt-6 sm:mt-4">
              <div className="flex items-center mb-4">
                <div className="lg:px-[15px] lg:py-2 sm:px-[13px] sm:py-1 rounded-lg bg-orange mr-3">
                  <i className="fa-solid fa-location-dot lg:text-xl sm:text-base"></i>
                </div>
                <p className="lg:text-xl sm:text-base dark:text-dark_tc">
                  Hannover, Germany
                </p>
              </div>
              <div className="flex items-center mb-4">
                <div className="lg:px-3 lg:py-2 sm:px-[11px] sm:py-1 rounded-lg bg-orange mr-3">
                  <i className="fa-solid fa-envelope lg:text-xl sm:text-base"></i>
                </div>
                <p className="lg:text-xl sm:text-base dark:text-dark_tc">
                  hamzamirza74@gmail.com
                </p>
              </div>
              <div className="flex items-center">
                <div className="lg:px-3 lg:py-2 sm:px-[11px] sm:py-1 rounded-lg bg-orange mr-3">
                  <i className="fa-solid fa-phone lg:text-xl sm:text-base"></i>
                </div>
                <p className="lg:text-xl sm:text-base dark:text-dark_tc">
                  +49737064539
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:h-full sm:w-full sm:h-full sm:mt-4 lg:mt-0">
            <div className="lg:mb-8 sm:mb-2">
              <h1 className="lg:text-2xl sm:text-base font-extrabold dark:text-dark_tc">
                Contact Form
              </h1>
              <p className="lg:text-xl sm:text-base dark:text-dark_tc opacity-50">
                Send me a message
              </p>
            </div>
            <form
              action="https://getform.io/f/928fe757-3dbe-4a46-9eca-4a08ebb07403"
              method="POST"
              className="flex flex-col"
            >
              <input
                required
                type="text"
                placeholder="Name"
                name="name"
                className="mb-4 lg:p-3 sm:p-2 sm:placeholder:text-sm lg:placeholder:text-base rounded-lg outline-none dark:bg-[#333333] dark:text-dark_tc"
              />
              <input
                required
                type="email"
                placeholder="Email"
                name="email"
                className="mb-4 lg:p-3 sm:p-2 placeholder:text-sm rounded-lg outline-none dark:bg-[#333333] dark:text-dark_tc"
              />
              <textarea
                required
                className="lg:p-3 sm:p-2 placeholder:text-sm rounded-lg outline-none dark:bg-[#333333] dark:text-dark_tc resize-none"
                placeholder="Message"
                name="message"
                cols="30"
                rows="10"
              ></textarea>
              <button
                type="submit"
                className="uppercase border-2 mt-4 border-orange text-orange lg:px-4 lg:py-2 sm:py-1 rounded-lg duration-300 hover:bg-orange hover:text-dark_tc lg:w-[50%]"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className=" opacity-75 hover:opacity-100 duration-300 lg:px-3 lg:py-2 sm:px-3 sm:py-1 sm:mt-3 lg:mt-0 cursor-pointer rounded-lg bg-orange animate-bounce"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </Link>
      </div>
    </div>
  )
}

export default ContactContainer
