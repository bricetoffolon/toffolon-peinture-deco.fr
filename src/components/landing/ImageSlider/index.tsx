import React from 'react'

import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';

import { Heading, Stack, Text } from "@chakra-ui/react";

import SlideContent from "@/components/landing/ImageSlider/SlideContent";


export default function ImageSlider(): any {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [AutoPlay()]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className={"embla__container"}>
                <div className={"embla__slide"}>
                    <SlideContent
                        imageUrl={"https://rhodescustomfinishes.com/wp-content/uploads/2021/09/exterior-paint-2.jpg"}
                        Content={
                            <Stack
                                direction={"column"}
                                align={"center"}
                            >
                                <Heading
                                >
                                    Une entreprise familliale depuis 1968
                                </Heading>
                                <Text>Certifié Qualibat</Text>
                            </Stack>
                        }
                    />
                </div>
                <div className={"embla__slide"}>
                    <SlideContent
                        imageUrl={"https://www.aceserviceswa.com/wp-content/uploads/2020/12/hero-home-painting-services-ephrata-wa.jpg"}
                        caption={"Hi"}
                    />
                </div>
                <div className={"embla__slide"}>
                        <SlideContent
                            imageUrl={"https://www.aceserviceswa.com/wp-content/uploads/2020/12/hero-home-painting-services-ephrata-wa.jpg"}
                            caption={"Ha"}
                        />
                </div>
            </div>
        </div>
    );
}