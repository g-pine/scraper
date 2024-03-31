import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
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
            {heroImages.map((image) => (
                <Image
                    src={image.imgUrl}
                />
            ))}
        </Carousel>
    </div>
  )
}

export default HeroCarousel
