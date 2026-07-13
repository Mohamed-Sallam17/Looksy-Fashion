import adiddas from '../assets/brands/adiddas.webp'
import nike from '../assets/brands/nike.webp'
import prada from '../assets/brands/prada.webp'
import hm from '../assets/brands/hm.webp'

const skillsIcons = [
    {
        src: adiddas,
        alt : "HTML icon"
    },
    {
        src: nike,
        alt : "CSS icon"
    },
    {
        src: prada,
        alt : "JS icon"
    },
    {
        src: hm,
        alt : "JS icon"
    } 
]


function Brands() {
  return (
        <div className="brands bg-black text-center w-full mt-8 lg:mt-0" id='brands'>
            <div className="brands-imgs">
                <div className="marquee overflow-x-hidden relative">
                    <div className="marquee-track flex w-max gap-4 md:gap-8 lg:gap-15">
                        {
                        [...skillsIcons,...skillsIcons,...skillsIcons,...skillsIcons,...skillsIcons].map((icon,index)=>(
                            <div className="marquee-item p-2 rounded-xl w-[50px] h-[50px] md:w-[150px] md:h-[150px] flex justify-center items-center" key={index}>
                                <img src={icon.src} alt={icon.alt} />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>        
  )
}

export default Brands