import React, {useContext} from 'react'
import Navbar from './Components/Navbar'
import { Context } from './Context'
import HomeContainer from './Components/HomeContainer'
import SkillsContainer from './Components/SkillsContainer'
import ContactContainer from './Components/ContactContainer'
import Footer from './Components/Footer'

const App = () => {
  const {darkMode} = useContext(Context)

  return (
    <div className={`${darkMode && 'dark'} w-full h-full`}>
      <Navbar/>
      <HomeContainer/>
      <SkillsContainer/>
      <ContactContainer/>
      <Footer/>
    </div>
  )
}

export default App