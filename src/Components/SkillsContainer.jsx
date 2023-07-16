import React, { useState, useContext } from "react"
import { Context } from "../Context"
import slides from "../Utils/slides"
import genRandomNum from "../Utils/randomNum"
import twcss from "../Images/twcss.png"
import fb from "../Images/fb.png"
import react from "../Images/react.png"
import jest from "../Images/jest.png"
import vite from "../Images/vite.png"
import html from "../Images/html.png"
import css from "../Images/css.png"
import js from "../Images/js.png"

const SkillsContainer = () => {
  const { currentIndex, setCurrentIndex, prevSlide, nextSlide, goToSlide } =
    useContext(Context)

  return (
    <div
      className="lg:w-full lg:h-[100vh] sm:w-screen sm:h-screen duration-300 dark:bg-dark_blue flex items-center justify-center sm:px-1 lg:px-0"
      id="skills"
    >
      <div className="lg:w-[1200px] sm:w-full sm:h-[80%] md:h-full flex flex-col items-center justify-around lg:py-20 md:py-20 sm:py-5">
        <div className="flex flex-col items-center sm:mb-8 lg:mb-0">
          <h1 className="lg:text-3xl sm:text-xl font-extrabold mb-1 dark:text-dark_tc">
            Skills
          </h1>
          <p className="text-orange uppercase lg:text-xl sm:text-lg">
            and projects
          </p>
        </div>
        <div className="flex w-full h-full items-center justify-between sm:flex-col lg:flex-row">
          <div className="lg:w-[45%] sm:w-full">
            <div className="flex flex-col mb-3 text-center">
              <p className="lg:text-lg sm:text-base font-bold dark:text-dark_tc">
                Hello again
              </p>
              <p className="dark:text-dark_tc sm:text-sm">
                I am a Frontend Developer, skilled in/mainly using:
              </p>
            </div>
            <div className="flex w-full justify-between">
              <div className="lg:w-[150px] lg:h-[100px] sm:w-[100px] sm:h-[50px] bg-[#f1f1f1] dark:bg-[#141414] rounded-lg flex flex-col items-center justify-around hover:shadow-xl duration-300 cursor-pointer">
                <div className="w-full h-[40%] flex">
                  <div className="w-[50%] h-full">
                    <img
                      src={html}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-[50%] h-full">
                    <img
                      src={css}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-[40%] h-[40%]">
                  <img
                    src={js}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="lg:w-[150px] lg:h-[100px] sm:w-[100px] sm:h-[50px] rounded-lg flex items-center justify-center bg-[#f1f1f1] dark:bg-[#141414] hover:shadow-xl duration-300 cursor-pointer">
                <div className="w-[40%] h-[40%]">
                  <img
                    src={react}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[40%] h-[40%]">
                  <img
                    src={twcss}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="lg:w-[150px] lg:h-[100px] sm:w-[100px] sm:h-[50px] rounded-lg bg-[#f1f1f1] dark:bg-[#141414] flex flex-col items-center justify-around hover:shadow-xl duration-300 cursor-pointer">
                <div className="w-full h-[40%] flex">
                  <div className="w-[50%] h-full">
                    <img
                      src={fb}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-[50%] h-full">
                    <img
                      src={vite}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-[40%] h-[40%]">
                  <img
                    src={jest}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[45%] lg:h-[300px] sm:w-full sm:h-[200px] group relative rounded-lg max-w-[540px]">
            <img
              src={slides[currentIndex].url}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <div
              className="cursor-pointer text-2xl hidden group-hover:block  absolute top-[50%] translate-x-0 translate-y-[-50%] right-3"
              onClick={nextSlide}
            >
              <i className="fa-solid fa-circle-chevron-right text-orange opacity-40 hover:opacity-100 duration-300 text-3xl"></i>
            </div>
            <div
              className="cursor-pointer text-2xl hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-3"
              onClick={prevSlide}
            >
              <i className="fa-solid fa-circle-chevron-left text-orange opacity-40 hover:opacity-100 duration-300 text-3xl"></i>
            </div>
            <div className="absolute left-[50%] translate-x-[-50%] translate-y-0">
              {slides.map((slide, index) => (
                <i
                  className={`fa-regular ${
                    index === currentIndex ? "fa-circle-dot" : "fa-circle"
                  } cursor-pointer mr-2 text-orange`}
                  key={index}
                  onClick={() => goToSlide(index)}
                ></i>
              ))}
            </div>
            <div className="absolute sm:-top-7 lg:-top-9">
              <a
                href={slides[currentIndex].link}
                target="blank"
                className="font-bold lg:text-lg sm:text-base dark:text-dark_tc hover:underline"
              >
                {slides[currentIndex].title}
              </a>
            </div>
            <div className="absolute right-0 sm:-top-7 lg:-top-9 flex">
              {slides[currentIndex].tech.map((tech) => (
                <p
                  key={genRandomNum()}
                  className="lg:mr-3 sm:mr-1 sm:text-xs lg:text-base last:mr-0 bg-orange p-1 rounded-lg text-dark_tc"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsContainer
