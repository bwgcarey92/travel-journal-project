import React from 'react'
import mtFuji from '../images/mt-fuji.png'
import location from '../images/location.png'

export default function Card(){
    return (
        <div className='card-container'>
            <img src={mtFuji} className='card-img' />
            <div className='card-info'>
                <div className='location-info'>
                    <img src={location} className='location-icon' />
                    <p className='destination'>Japan</p>
                    <a href='#' className='googlemaps-anchor'>View on Google Maps</a>
                </div>
                <h2 className='country'>Mount Fuji</h2>
                <div></div>
                <p className='date'>12 Jan, 2021 - 24 Jan, 2021</p>
                <p className='destination-descr'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}