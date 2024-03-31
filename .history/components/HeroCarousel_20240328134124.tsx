"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
    { imgUrl: '/public/assets/images/smartwatch.jpeg', alt: 'smartwatch'},
    { imgUrl: '/public/assets/images/bagpack.png', alt: 'bag'},
    { imgUrl: '/public/assets/images/lamp.png', alt: 'lamp'},
    { imgUrl: '/public/assets/images/airfryer.png', alt: 'air fryer'},
    { imgUrl: '/public/assets/images/chair.png', alt: 'chair'}
]

const HeroCarousel = () => {
  return (
    <div>
        <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={2000}
            showArrows={false}
            showStatus={false}
        >
            {heroImages.map((image) => (
                <Image
                    src={'/public/assets/images/smartwatch.jpeg'}
                    alt={image.alt}
                    width={484}
                    height={484}
                    className="object-contain"
                    key={image.alt}
                />
            ))}
        </Carousel>
    </div>
  )
}

export default HeroCarousel
