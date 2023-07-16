import React, { createContext, useEffect, useState } from "react"
import slides from "./Utils/slides"

const Context = createContext()

function ContextProvider(props) {
  const [darkMode, setDarkMode] = useState(() =>
    JSON.parse(localStorage.getItem("darkmode"))
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sidebar, setSidebar] = useState(false)

  function prevSlide() {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  function nextSlide() {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  function goToSlide(index) {
    setCurrentIndex(index)
  }

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <Context.Provider
      value={{
        darkMode,
        currentIndex,
        sidebar,
        setSidebar,
        setCurrentIndex,
        setDarkMode,
        prevSlide,
        nextSlide,
        goToSlide,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
