import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutHero from './components/AboutHero'
import AboutService from './components/AboutService'
const About = () => {
  return (
    <main className='px-4 md:px-8 lg:px-12'>
      <Helmet>
        <title>about__Katrina Romulo</title>
      </Helmet>
      <AboutHero />
      <AboutService />
    </main>
  )
}

export default About