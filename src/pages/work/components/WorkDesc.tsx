import { Link } from 'react-router-dom'
export default function WorkDesc(){
    return(
        <div className='flex items-center justify-center my-4 mx-auto gap-3'>
            <p className='font-serif text-[29px] leading-[29px] md:text-[34px] md:leading-[34px] 
            lg:text-[46px] lg:leading-[47px] text-[#000] text-center lg:max-w-6xl lg:w-[90%] w-full'>
                Katrina Romulo is a multidisciplinary designer. She loves roasted vegetables, the Bay Area,
                 and <Link to="/book" target="_blank" className='text-[#FD7B18]'>book covers.</Link> She currently works and lives in Los Angeles, California.</p>
        </div>
    )
}