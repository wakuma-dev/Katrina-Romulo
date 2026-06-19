import useMenuStore from '../../../app/store/useMenuStore';
import navLinks from '../../../data/navLinks';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'
import { HiBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
export default function MobileMenu(){
    const {isOpen, closeMenu, toggleMenu} = useMenuStore();
    return(
     <div className="lg:hidden relative">
        <button className="cursor-pointer absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer z-50" onClick={() => toggleMenu()}>
        {isOpen ? <IoCloseOutline size={28} /> : <HiBars2 size={28} />}
        </button>
     <AnimatePresence>
        {isOpen && (
            <motion.div 
                   initial={{x: "100%", opacity: 0}}
                   animate={{x: 0, opacity: 1}}
                   exit={{x: "100%", opacity: 0}}
                   transition={{duration: 0.4, ease: "easeOut"}}
                   className='bg-white fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-4'>
                    {navLinks.map((link) => {
                        return(
                            <div className='flex flex-col' key={link.path}>
                                <NavLink 
                                to={link.path} onClick={closeMenu} className="text-[20px] leading-[20px] font-normal text-[#000]">
                  
                                    {link.label}
                                </NavLink>
                            </div>
                        )
                    })}
                   </motion.div>
        )}
     </AnimatePresence>
     </div>
    )
}