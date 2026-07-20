import { useGetProductsQuery } from "../rtk/slices/products-slice"
import Breadcrumbs from "./Breadcrumbs";

function Shop() {

  const {data: dataResponse, error, isLoading} = useGetProductsQuery();

  if (isLoading) {return <h4> Loading Products... </h4>}
  if (error) {return <h4> error has happened: {error.message} </h4>}

  return (
    <section className="shop">
      <div className="container">
        <Breadcrumbs/>
        <div className="products_tabs"></div>
        <div className="top-title flex justify-between items-center mb-4">
            <h2 className="font-bold text-3xl">All Products</h2>
        </div>
        <div className="products_items">
          <div className="grid">
            {
              dataResponse?.products?.map((product)=>(
                <div className="product_item"></div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop
