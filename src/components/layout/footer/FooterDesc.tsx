import React from 'react'
import { motion } from 'framer-motion'
const FooterDesc = () => {
  return (
    <motion.div className='flex flex-col items-start w-full lg:w-1/2 gap-3'
              initial={{ opacity: 0, x: -80 }}
             whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.6, ease: "easeOut" }}>

        <h2 className='text-[36px] leading-[38px] text-[#000] font-serif font-normal'>Let's Talk</h2>
   
        <p className='text-[17px] leading-[26px] text-[#000] font-sans'>If you're interested in working together, please fill out this super quick form and tell me about your project scope/deliverables, timeline, and budget! The more detailed the better.</p>
        <p className='text-[17px] leading-[26px] text-[#000] font-sans'>I specialize in branding D2C companies primarily for Gen Z/Millenials, but am also open to other projects such as merch design, book cover design (please), editorial posters, and more! If you just want to say hi, that's totally welcome too. </p>
        <p className='text-[17px] leading-[26px] text-[#000] font-sans'>I do my best to get back to everyone but due to volume of inquiries I prioritize responding to projects that I feel are a good fit! </p>
    </motion.div>
  )
}

export default FooterDesc  