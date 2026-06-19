
import { motion } from "framer-motion";
import img from "../../../assets/Untitled4.jpg";

export default function AboutHero() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-8 py-10">
      {/* Image */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={img}
          alt="About hero"
          className="w-full h-[400px] lg:h-[550px] object-cover rounded-lg"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-14 gap-6"
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <h1 className='text-[42px] leading-[42px] lg:text-[60px] lg:leading-[59px] font-normal font-serif max-w-3xl'>
          If you’re reading this, you can call me Kat.
        </h1>

        <div className="space-y-5 text-[17px] leading-[30px] text-black font-sans text-center lg:text-left">
          <p className='text-[17px] leading-[26px] text-black font-sans'>
            You’ve gotten this far and now I consider us friends. It’s nice to
            meet you! I'm a designer passionate about creating visuals that tell
            stories and designing brand experiences that improve everyday lives,
            especially within the direct-to-consumer market. My projects have
            ended up nationwide in places like Whole Foods, Target, and
            Sephora.
          </p>

          <p className='text-[17px] leading-[26px] text-black font-sans'>
            I come from a multidisciplinary background (I studied sustainable
            environmental design at UC Berkeley, but my specialties lie within
            graphic design, brand design, and making work feel like play). I’ve
            gotten the chance to work with some of my dream companies, and I am
            incredibly grateful for these opportunities.
          </p>

          <p className='text-[17px] leading-[26px] text-black font-sans'>
            I'm a big fan of powerful branding and communication. I taught a
            class on Brand Identity and Graphic Design at UC Berkeley. I’ve also
            given talks about design at Berkeley and Stanford and even spoken in
            front of more than 1,000 people at the Brand New Conference. During
            my free time, you can find me reading, searching for my next book
            cover to design, filming my friends, or eating chicken wings.
          </p>
        </div>
      </motion.div>
    </section>
  );
}