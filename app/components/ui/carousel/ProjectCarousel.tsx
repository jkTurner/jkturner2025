'use client'
import useEmblaCarousel from "embla-carousel-react";
import Slide from "./Slide";

const ProjectCarousel = () => {

    const [emblaRef] = useEmblaCarousel();

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <Slide />
                <div className="embla__slide">Slide 1</div>
                <div className="embla__slide">Slide 2</div>
                <div className="embla__slide">Slide 3</div>
            </div>
        </div>
    )
}

export default ProjectCarousel;