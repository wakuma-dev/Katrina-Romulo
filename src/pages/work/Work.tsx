import React from 'react'
import { Helmet } from 'react-helmet-async'
import WorkDesc from './components/WorkDesc'
import WorkProduct from './components/WorkProduct'
const Work = () => {
  return (
   <main className='px-4 md:px-8 lg:px-12'>
    <Helmet>
     <title>Katrina Romulo</title>
    </Helmet>
    <WorkDesc />
    <WorkProduct />
   </main>
    
  )
}

export default Work