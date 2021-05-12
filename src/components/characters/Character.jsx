import React from 'react'
import './character.css'

export default function Character({ name, image, house }) {
    return (
        <>
            <h3>{name}</h3>
            <img className='list-img' src={image} />
            <p>{house}</p>
        </>
    );
}
