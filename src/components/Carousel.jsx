import React from 'react'
import "../utils/style/carousel.css"
import { useState, useEffect } from "react"

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
    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }


    return (
        <section id='home'>
            <div className='carousel'>
                <div className='carousel_wrapper'>
                    {images.map((image, index) => {
                        return (
                            <div key={index} className={index == current ? "carousel_card carousel_card-active" : "carousel_card"}>
                                <img className='card_image' src={image.image} alt="" />
                                <div className='card-overlay'>
                                    <h2 className='card_title'>{image.title}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Caroussel