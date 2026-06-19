import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import SocialLinks from './SocialLinks';
import MobileMenu from './MobileMenu';
export default function Navbar(){
    return(
        <nav className='flex items-center justify-between px-4 md:px-8 lg:px-12 py-3 lg:py-4'>
        <Logo />
        <div className='flex items-center gap-8'>
        <NavMenu />
        <SocialLinks />
        </div>
        <MobileMenu />
        </nav>
    )
}