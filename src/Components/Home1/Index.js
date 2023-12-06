import Blog from './Blog';
import Brands from './Brands';
import Categories from './Categories';
import Deals from './Deals';
import Gallery from './Gallery';
import Hero from './Hero';
import Product from './Product';
import Testimonial from './Testimonial';
import TrendsProduct from './TrendsProduct/TrendsProduct';

const Index = () => {
  return (
    <>
      <Hero />
      <Product />
      <TrendsProduct />
      <Deals />
      <Categories />
      <Blog />
      <Testimonial />
      <Brands />
      <Gallery />
    </>
  )
}

export default Index;