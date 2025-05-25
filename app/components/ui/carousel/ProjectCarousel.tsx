'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useCallback, useState } from 'react';
import Slide from './Slide';
import { ProjectData } from '@/data/SiteData';
import { ChevronLeftIcon, ChevronRightIcon } from '@/asset/Icon';

const ProjectCarousel = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollTo = (index: number) => emblaApi?.scrollTo(index);
    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <div className="w-full bg-[var(--backgroundOverlay)] py-2xl mt-2xl">
            <div className="embla w-full max-w-[var(--desktop)] mx-auto">

                {/* Navigator UI */}
                <div className="flex w-full items-center justify-between px-md gap-sm mb-md">
                    <h2 className="font-bold text-[var(--accent)]">Projects</h2>
                    <div className="flex items-center">
                        <button onClick={scrollPrev} className="text-[var(--accent)] px-2 mr-sm">
                            <ChevronLeftIcon size={16} color="var(--accent)" />
                        </button>

                        <div className="flex gap-xs">
                            {ProjectData.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollTo(i)}
                                className={`w-3 h-3 ${
                                i === selectedIndex ? 'bg-[var(--accent)]' : 'bg-[var(--mute)]'
                                }`}
                            />
                            ))}
                        </div>

                        <button onClick={scrollNext} className="text-[var(--accent)] px-2 ml-sm">
                            <ChevronRightIcon size={16} color="var(--accent)" />
                        </button>
                    </div>
                </div>

                {/* ref & slides */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                    {ProjectData.map((item) => (
                        <div key={item.header} className="embla__slide">
                        <Slide {...item} />
                        </div>
                    ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectCarousel;