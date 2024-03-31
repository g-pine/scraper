"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
    { imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch'},
    { imgUrl: '/assets/images/bagpack.png', alt: 'bag'},
    { imgUrl: '/assets/images/lamp.png', alt: 'lamp'},
    { imgUrl: '/assets/images/airfryer.png', alt: 'air fryer'},
    { imgUrl: '/assets/images/chair.png', alt: 'chair'}
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
                    src={image.imgUrl}
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
