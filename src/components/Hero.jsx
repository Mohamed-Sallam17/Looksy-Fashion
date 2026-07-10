import { Link } from "react-router-dom"
import heroImg from '../assets/hero-img.webp'

function Hero() {
  return (
    <section className="hero h-[100dvh]">
      <div className="flex flex-col-reverse lg:flex-row lg:h-full gap-4">
        <div className="hero__content flex flex-col justify-center flex-1 space-y-4 px-2 lg:px-0 lg:pl-6 text-center lg:text-start">
          <h2 className="text-2xl lg:text-5xl leading-[2em] ">
            LOOK <br />
            GOOD <br />
            FEEL <br />
            DIFFERENT.
          </h2>
          <p className="text-[var(--sub-color)]">
            At Looksy, we blend timeless style with modern attitude — made for those who dare to be different.
          </p>
          <Link to="/shop" className="w-[140px] h-[56px] bg-[var(--btn-color)] flex justify-center m-auto lg:m-0 lg:mt-2">
            <button className="text-bold"> Shop Now </button>
          </Link>
        </div>
        <div className="hero__media flex-1 bg-[var(--bg-color)] lg:pr-6">
          <div className="hero_model h-full px-2 lg:px-0">
            <img src={heroImg} alt="Hero Banner" className="w-[50%] h-full m-auto lg:m-0" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


