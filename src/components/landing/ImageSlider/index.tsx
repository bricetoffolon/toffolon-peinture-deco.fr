import React from 'react'

import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';

import SlideContent from "@/components/landing/ImageSlider/SlideContent";

import Section1 from "@/components/landing/ImageSlider/Section1";


export default function ImageSlider(): any {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [AutoPlay()]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className={"embla__container"}>
                <div className={"embla__slide"}>
                    <SlideContent
                        imageUrl={"https://rhodescustomfinishes.com/wp-content/uploads/2021/09/exterior-paint-2.jpg"}
                        Content={
                            <Section1 />
                        }
                    />
                </div>
                <div className={"embla__slide"}>
                    <SlideContent
                        imageUrl={"https://www.aceserviceswa.com/wp-content/uploads/2020/12/hero-home-painting-services-ephrata-wa.jpg"}
                        Content={
                            <Section1 />
                        }
                    />
                </div>
                <div className={"embla__slide"}>
                        <SlideContent
                            imageUrl={"https://www.aceserviceswa.com/wp-content/uploads/2020/12/hero-home-painting-services-ephrata-wa.jpg"}
                            Content={
                                <Section1 />
                            }
                        />
                </div>
            </div>
        </div>
    );
}