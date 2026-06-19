
import { Helmet } from 'react-helmet-async'
import Section from './components/Section'
import bgImage from '../../assets/Untitled.jpg'
import { motion } from 'framer-motion'
import bgImage2 from '../../assets/Untitled8.jpg'
import bgImage3 from '../../assets/Untitled9.jpg'
const services = [
  "packaging",
  "web design",
  "event design",
  "creative direction"
]
const HyperCleanser = () => {
  return (
    <main>
      <Helmet>
        <title>Hyper Sunscreen - Katrina Romulo</title>
      </Helmet>
     <Section
        background={bgImage}
        header='On the Daily.'
        subheader='I designed a campaign to launch Hyper’s long anticipated fourth product (and first venture into sun protection), the Invisible for All SPF 50 Sun Drops made for every skin tone and type. The photoshoot paid homage to Hyper’s roots in New York City. To celebrate this new launch I also designed a 3-day pop-up cafe installation in downtown Manhattan to introduce New Yorkers to Hyper’s new hero product.'
        items={services}>
          <motion.div className="py-6"
           initial={{scale: 0.75, opacity: 0}}
           whileInView={{scale: 1, opacity: 1}}
           viewport={{once: true, amount: 0.3}}
           transition={{duration: 0.4, ease: "easeOut"}}>
    <img src={bgImage2} className='w-full object-cover h-[50dvh] lg:h-[80dvh]'/>
  </motion.div>
    <div className="py-12">
   <img src={bgImage3} className='h-[50dvh] lg:h-[80dvh] object-cover w-full'/>
  </div>
    <div className='flex flex-col lg:flex-row w-full items-start gap-4 py-8 lg:py-18'>
    <span className='text-[46px] leading-[47px] font-serif'>Credits</span>
    <div className='ml-0 lg:ml-[500px] flex flex-col items-start gap-4'>
      <h4 className='text-[18px] leading-[27px] text-[#000] font-sans'>Lifestyle and Product Photographer: Rhianydd Hylton</h4>
      <p className='text-[18px] leading-[27px] text-[#000] font-sans'>Models: Models: Bousso and Aaron Ricketts </p>
    </div>
  </div>
        </Section>
    </main>
  )
}

export default HyperCleanser