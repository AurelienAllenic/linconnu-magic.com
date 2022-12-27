import React from 'react'
import "../utils/style/carousel.css"
import { useState, useEffect } from "react"
import { BsChevronDoubleDown } from "react-icons/bs"

function Caroussel({ images }) {
    const [current, setCurrent] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;

    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => {
            slideRight();
        }, 4000)
    })

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }


    return (
        <section id='home'>
            <div className='carousel'>
                <div className='carousel_wrapper'>
                    {images.map((image, index) => {
                        return (
                            <div key={index} className={index == current ? "carousel_card carousel_card-active" : "carousel_card"}>
                                <img className='card_image' src={image.image} alt={image.alt} />
                                <div className='card-overlay'>
                                    <h2 className='card_title'>{image.title}</h2>
                                </div>
                                <div className='arrowcontainer'><span className='arrow'><BsChevronDoubleDown /></span></div>

                            </div>
                        )
                    })}
                    x
                </div>

            </div>

        </section>
    )
}

export default Caroussel