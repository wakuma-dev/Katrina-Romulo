import React from 'react'
import FooterDesc from './FooterDesc';
import FooterForm from './FooterForm';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
   <footer className='px-4 md:px-8 lg:px-12 py-4'> 
   <div className="flex flex-col lg:flex-row justify-between gap-5">
    <FooterDesc />
    <FooterForm />
    </div>
    <FooterBottom />
   </footer>
  );
}

export default Footer