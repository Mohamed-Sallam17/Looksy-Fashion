function ProductCard({product, layout= "vertical"}) {

    const isHorizontal = layout === "horizontal";
    
  return (
        <>
            <div key={product.id} className={`product_card flex items-center justify-center gap-2 rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all ${isHorizontal ? "flex-row" : "flex-col"}`}>
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
        </>
  )
}

export default ProductCard








    // <>
    //     {dataResponse?.products?.map((product) => (
    //         <div key={product.id} className={`product_card flex items-center justify-center gap-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all
    //             ${isHorizontal ? "flex-row" : "flex-col"}
    //         `}>
    //             <div className="product_img">
    //                 <img src={product.thumbnail} alt={product.title} className="m-auto"/>
    //                 <div className="sale-percentage">
    //                     {parseInt(product.discountPercentage)} %
    //                 </div>
    //             </div>
    //             <div className="product_content">
    //                 <a href="">
    //                     <span>{product.category}</span>
    //                 </a>
    //                 <h2>{product.title}</h2>
    //                 <div className="product_price">
    //                     <span className="current-price">{product.price}</span>
    //                 </div>
    //             </div>
    //         </div>
    //     ))}
    // </>