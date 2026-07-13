import { useGetProductsQuery } from "../rtk/slices/products-slice"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function Products() {

        const {data: dataResponse, error, isLoading} = useGetProductsQuery();

        console.log("حالة التحميل (isLoading):", isLoading);
        console.log("البيانات الراجعة (products):", dataResponse);
        console.log("الأخطاء إن وجدت (error):", error);


        if(isLoading){
            return <h4>جاري تحميل المنتجات ....</h4>
        }
        if(error){
            return <h4>حدث خطأ: {error.message}</h4>
        }
  return (
    <section className="products-list">
      <div className="container">
        <div className="top-title"></div>
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
            className="mySwiper"
          >
            {dataResponse?.products?.map((product) => (
              <SwiperSlide >
                <div className="product_card flex items-center justify-center flex-col gap-2">
                    <div className="product_img">
                        <img src={product.thumbnail} alt={product.title} className="m-auto"/>
                        <div className="sale-percentage">
                            {parseInt(product.discountPercentage)} %
                        </div>
                    </div>
                    <div className="product_content">
                        <a href="">
                            <span>{product.category}</span>
                        </a>
                        <h2>{product.title}</h2>
                        <div className="product_price">
                            <span className="current-price">{product.price}</span>
                        </div>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Products
