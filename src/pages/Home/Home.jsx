import React from 'react'

import Commitment from './Components/Commitment'
import Contact from './Components/Contact'
import Featured from './Components/Featured'
import  Footer  from '../../Components/Footer'
import Form from './Components/Form'
import Hero from './Components/Hero'
import Services from './Components/Services'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <Featured/>
      <Commitment/>
      {/* <Knowledge/> */}
      <Contact/>
      {/* <Form/> */}
    </div>
  )
}

export default Home