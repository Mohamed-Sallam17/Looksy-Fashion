import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Banner from "./Banner"
import Brands from "./Brands"
import Hero from "./Hero"
import { useGetProductsQuery } from '../rtk/slices/products-slice';
import ProductCard from './ProductCard';

function Home() {

    
    const {data: dataResponse, error, isLoading} = useGetProductsQuery();
          if(isLoading){
              return <h4>جاري تحميل المنتجات ....</h4>
          }
          if(error){
              return <h4>حدث خطأ: {error.message}</h4>
          }
          
  return (
    <>
      <Hero/>
      <Brands/>
      <div className="product-slider">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1}
          breakpoints={{
              640:{slidesPerView: 2},
              991:{slidesPerView: 3},
              1024:{slidesPerView: 4},
          }}
          spaceBetween={30}
          className="mySwiper">
            {
              dataResponse?.products?.map((product)=>(
                <SwiperSlide>
                  <ProductCard product={product} key={product.id} layout='verticle'/>
                </SwiperSlide>
              ))
            }
          </Swiper>
      </div>
      <Banner/>
    </>
  )
}

export default Home
