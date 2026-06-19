import React from 'react'
import socialLinks from '../../../data/socialLinks'
import { NavLink } from 'react-router-dom'
const SocialLinks = () => {
  return (
    <div className='hidden lg:flex items-center gap-4'>
     
      <ul className="flex items-center gap-6">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <li key={link.href} className="flex items-center">
              <NavLink to={link.href} target="_blank" className="flex items-center">
                <Icon className='text-[18px] leading-[27px] font-normal'/>
              </NavLink>
            </li>
          );
        })}
      </ul>  
    </div>
  )
}

export default SocialLinks
