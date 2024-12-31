import React from 'react'
import Background from '../Backgound'
import ParticlesComponent from '../Particlejs'
import NewHeader from '../components/NewHeader'
import SplineScene from '../SplineScene'
import NewFooter from '../components/Footer'
const MainLanding = () => {
  return (
    <div className="fixed w-full inset-0 transition-opacity duration-1000 opacity-100">
    <Background />
    <ParticlesComponent id="particles" />
    <NewHeader/>
    <SplineScene />
    <NewFooter/>
  </div>
  )
}

export default MainLanding