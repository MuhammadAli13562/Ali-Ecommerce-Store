"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CarouselImages } from "../constants/constants";
import Link from "next/link";

const Slider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: false }),
  ]);

  return (
    <div className="embla mb-32 overflow-x-hidden" ref={emblaRef}>
      <div className="flex gap-12">
        {CarouselImages.map((img) => (
          <Image
            alt="featured"
            src={img}
            width="1300"
            className="mr-12 border-8 border-black shadow-gray-500"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
