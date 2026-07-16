import { useParams } from "react-router-dom";
import { useGetSingleCategoryQuery } from "../rtk/slices/products-slice"

function CategoryPage() {
    const {categoryName} = useParams();
    const {data: dataResponse , isError, isLoading } = useGetSingleCategoryQuery(categoryName);
        if(isLoading){
            return <h4>جاري تحميل المنتجات ....</h4>
        }
        if(isError){
            return <h4>حدث خطأ: {isError.message}</h4>
        }
    
  return (
    <main id="main-content">
        <div className="container">
            <div className="breadcrambs"></div>
            <div className="category-title">
                <h2>{categoryName}</h2>
            </div>
            <div className="main-content">
                <aside className="product-filter">
                </aside>
                <div>
                    <div className="products-toolbar"></div>
                    <div className="products-list">
                        {
                            dataResponse?.products?.map((product)=>(
                                <h2>{product.price}</h2>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default CategoryPage
