import React from 'react'
import location from '../../public/images/location.png'

export default function Card(props){
    return (
        <div className='card-container'>
            <img src={props.item.imageUrl} className='card-img' />
            <div className='card-info'>
                <div className='location-info'>
                    <img src={location} className='location-icon' />
                    <p className='destination'>{props.item.location}</p>
                    <a href='#' className='googlemaps-anchor'>View on Google Maps</a>
                </div>
                <h2 className='country'>{props.item.title}</h2>
                <div></div>
                <p className='date'>{props.item.startDate} - {props.item.endDate}</p>
                <p className='destination-descr'>{props.item.description}</p>
            </div>
        </div>
    )
}