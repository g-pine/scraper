import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const heroImage = [
    { imgUrl: '/public/assets/images/hero-1.svg', alt: 'smartwatch'},
    { imgUrl: '/public/assets/images/hero-2.svg', alt: 'bag'},
    { imgUrl: '/public/assets/images/hero-3.svg', alt: 'lamp'},
    { imgUrl: '/public/assets/images/hero-4.svg', alt: 'air fryer'},
    { imgUrl: '/public/assets/images/hero-5.svg', alt: 'chair'}
]

const HeroCarousel = () => {
  return (
    <div>
        <Carousel>
            <div>
                <img src="assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    </div>
  )
}

export default HeroCarousel
