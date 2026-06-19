
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Section from './components/Section'
import bgImage from '../../assets/img1.jpg'
import bgImage2 from '../../assets/Untitled5.jpg';
import bgImage3 from '../../assets/Untitled6.jpg'
const services = [
  "brand identity",
  "packaging",
  "web design",
  "social media"
]
const HyperSunscreen = () => {
  return (
    <main>
    <Helmet>
      <title>Lentiful - Katrina Romulo</title>
    </Helmet> 
    <Section 
    background={bgImage}
    header="The Ultimate Plant-Based, On-the-go Lunch."
    subheader='Lentiful is an instant lentil company aiming to provide nutrient-dense, delicious and healthy lunches at a moment’s notice. Founder Ben Bacon came to me to develop a full brand identity and packaging system. Our goal was to transform a traditionally overlooked category into something fresh, modern, and craveable. The resulting brand world helped position Lentiful for national retail expansion, and over the years I’ve designed several different flavors that are now sold nationwide in major retailers like Whole Foods and Target.'
    items={services}
   >
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
      <h4 className='text-[18px] leading-[27px] text-[#000] font-sans'>Photography: Garnish Studios</h4>
      <p className='text-[18px] leading-[27px] text-[#000] font-sans'>Models: <br /> Richa Mishra, Alay Modi, Ben Bacon</p>
    </div>
  </div>
    </Section>

    </main>
  )
}

export default HyperSunscreen