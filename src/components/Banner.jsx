import { Link } from "react-router-dom"
import bgImage from '../assets/bg-image.webp'

function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="bg_image h-[45vh] lg:h-[60vh] flex justify-center items-center p-6 rounded-2xl bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${bgImage})`}}>
            <div className="banner_content text-center space-y-6 font-bold">
                <h2 className="text-3xl lg:text-5xl">Discover Elegance <br /> in Every Thread</h2>
                <p> Our new linen collection has arrived —  <br /> made for comfort, crafted for style.</p>
                <Link to="/shop" className="w-[140px] h-[56px] bg-[var(--btn-color)] flex justify-center m-auto ">
                    <button className="font-bold"> Shop Now </button>
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
