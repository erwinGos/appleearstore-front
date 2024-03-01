import React from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";
import blankProduct from '../../assets/blank_product.png';

const ImageCaroussel = ({images}) => {
    return (
        <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
        <h2 className="sr-only">Images</h2>
        <div className="pb-8">
        {images.length > 0 ?
                    <Carousel 
                    loop={true}
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i ? "w-8 bgSecondaryColor" : "w-4 bgSecondaryColorHalf"
                            }`}
                            onClick={() => setActiveIndex(i)}
                            />
                        ))}
                        </div>
                    )}
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                        variant="text"
                        color="colorText"
                        size="lg"
                        onClick={handlePrev}
                        className="!absolute top-2/4 left-4 -translate-y-2/4"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                        variant="text"
                        color="colorText"
                        size="lg"
                        onClick={handleNext}
                        className="!absolute top-2/4 !right-4 -translate-y-2/4"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        </IconButton>
                    )}
                    className="rounded-xl">
                    {images.map(singleImage => (
                        <div className='flex justify-center items-center h-full w-full overflow-hidden bg-gray-200'>
                        <img src={`data:image/png;base64,${singleImage.image}`} className="object-contain max-w-full max-h-full" />
                        </div>
                    ))}
        </Carousel> : 
        <div>
            <img src={blankProduct} alt="" />    
        </div>}

        </div>
    </div>
    )
}

export default ImageCaroussel