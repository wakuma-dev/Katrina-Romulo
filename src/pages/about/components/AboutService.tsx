
import { motion } from "framer-motion";

const services = [
  "Branding",
  "Packaging Design",
  "Web Design",
  "Campaign Design",
  "Creative Direction",
  "Social Media",
];

const AboutService = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Services */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <h3 className="text-[19px] leading-[20px] font-serif font-normal mb-8">
            Services
          </h3>

          <ul className="space-y-1">
            {services.map((service) => (
              <li
                key={service}
                className="text-[14px] leading-[21px] font-sans"
              >
                {service}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Companies */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col"
        >
          <h3 className="text-[19px] leading-[20px] font-serif font-normal mb-8">
            Some Fun Companies I've Worked With
          </h3>

          <p  className="text-[14px] leading-[21px] font-sans text-black max-w-md">
            Herman Miller, Spotify, Adobe, Instagram, Figma, Logitech, Lexus,
            Refinery29, Blue Moon, Stanley 1913, LG, Monotype, Lucy & Yak,
            Typeform, Red Antler, Aaptiv.
          </p>
        </motion.div>

        {/* Press */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col"
        >
          <h3 className="text-[19px] leading-[20px] font-serif font-normal mb-8">
            Featured In
          </h3>

          <p className="text-[14px] leading-[21px] font-sans text-black max-w-md">
            Kat’s work has been featured in It's Nice That, The Dieline,
            Creative Boom, Forbes, Cosmopolitan, Los Angeles Times, Vogue,
            Harper’s Bazaar, Allure, InStyle, Vanity Fair, Byrdie, and more.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutService;