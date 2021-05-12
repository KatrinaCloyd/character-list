import React from 'react'
import './character.css'
import { Link } from 'react-router-dom';

export default function Character({ name, image, house }) {
    return (
        <>
            <Link to={`search/${name}`} key={name}>
                <h3>{name}</h3>
                <img className='list-img' src={image} />
                <p>{house}</p>
            </Link>
        </>
    );
}
