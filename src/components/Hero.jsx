import { Link } from "react-router-dom"

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="flex">
          <div className="hero__content">
            <h2>
              LOOK <br />
              GOOD <br />
              FEEL <br />
              DIFFERENT.
            </h2>
            <p>
              At Looksy, we blend timeless style with modern attitude — made for those who dare to be different.
            </p>
            <Link to="/shop">
              <button> Shop Now </button>
            </Link>
          </div>
          <div className="hero__media"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
