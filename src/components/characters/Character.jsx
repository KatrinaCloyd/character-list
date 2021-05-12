import React from 'react'
import './character.css'

export default function Character({ name, image, house }) {
    return (
        <div className='char-card'>
            <h4>{name}</h4>
            <img className='list-img' src={image} />
            <p>{house}</p>
        </div>
    );
}
