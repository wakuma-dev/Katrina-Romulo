import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/Untitled.jpg";
import img3 from "../../../assets/Untitled1.jpg";
import img4 from "../../../assets/Untitled2.jpg";

type Products = {
  id: number;
  image: string;
  text: string;
  path: string;
};

const products: Products[] = [
  {
    id: 1,
    image: img1,
    text: "hyper sunscreen campaign",
    path: "/work/hyper-sunscreen",
  },
  {
    id: 2,
    image: img2,
    text: "hyper gentle brightening cleanser campaign",
    path: "/work/hyper-cleanser",
  },
  {
    id: 3,
    image: img3,
    text: "local",
    path: "/work/local",
  },
  {
    id: 4,
    image: img4,
    text: "100 days branding",
    path: "/work/branding",
  },
];

export default function WorkProduct() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
      {products.map((prod) => (
        <Link
          key={prod.id}
          to={prod.path}
          className="flex flex-col gap-2"
        >
          {/* Image with scroll animation */}
          <div className="w-full h-[370px] md:h-[450px] overflow-hidden rounded-lg">
            <motion.img
              src={prod.image}
              alt={prod.text}
              className="w-full h-full object-cover rounded-lg"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            />
          </div>

          {/* Text */}
          <motion.p
            className="text-[26px] leading-[29px] font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {prod.text}
          </motion.p>
        </Link>
      ))}
    </main>
  );
}