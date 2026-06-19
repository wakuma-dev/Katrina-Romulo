
import img from '../../src/assets/merge 1/86676c0892f8a077c2f7dd820a383df0.jpg';
import img2 from '../../src/assets/merge 1/b92db2613144fb9c3bcaa1992106e0b6.jpg';
import img3 from '../../src/assets/merge 1/3589af74f154168e32d257537dc525d4.jpg';
import img4 from '../../src/assets/merge 1/525dd4c0069d629ac93c0c236adb5017.jpg';
import img5 from '../../src/assets/merge 1/ffbe7073c50b5c8d2f73ed3ea8d4c3df.jpg';
import img6 from '../../src/assets/merge 1/23ee8521bced92d2a00b03e09b5632b6.jpg'
type ImageProps = {
  image: string;
  alt: string;
}
const ImageProduct: ImageProps[] = [
  {image: img, alt: "design preference"},
  {image: img2, alt: "aesthetic poster"},
  {image: img3, alt: "3d design"},
  {image: img4, alt: "fashion design"},
  {image: img5, alt: "vintage poster"},
  {image: img6, alt: "minimal design"}
]
import { Helmet } from 'react-helmet-async'
const Book = () => {
  return (
   <main className="px-4 md:px-8 lg:px-12 py-4">
    <Helmet>
      <title>Book Cover - Katrina Romalo</title>
    </Helmet>
    <div className="flex items-center justify-center mx-auto">
      <p className='text-center text-[26px] leading-[27px] lg:text-[36px] lg:leading-[38px] font-serif font-normal text-[#000] w-[80%]'>Katrina Romulo wants to design more book covers (any book cover, really, but if she had a preference it would be fiction and/or romance). She wants to design one so much that she has made these to prove she can do it. The first one is actually real!</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-6">
     {ImageProduct.map((prod) => {
      return(
        <img src={prod.image} alt={prod.alt} className="w-full max-h-[500px] object-cover" />
      )
     })}
    </div>
   </main>
  )
}

export default Book