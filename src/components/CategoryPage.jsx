import { useParams } from "react-router-dom";
import { useGetSingleCategoryQuery } from "../rtk/slices/products-slice"
import Breadcrumbs from "./Breadcrumbs";


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
            <div className="breadcrambs">
                <Breadcrumbs/>
            </div>
            <div className="category-title">
                <h2>{categoryName}</h2>
            </div>
            <div className="main-content flex gap-4">
                <aside className="product-filter w-[20%] bg-gray-400">
                    <h2>Filter</h2>
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
