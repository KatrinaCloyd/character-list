import React from 'react';
import style from './character.css';

export default function CharacterDetail({ name, image, house, alive, ancestry, patronus, species, wand }) {
    return (
        <div className={style.detail}>
            <h3>{name}</h3>
            <img className={style.detailImg} src={image} alt={'character image'} />
            <p>{house ? `${house} House` : 'No Hogwarts House'}</p>
            <p>{alive ? 'Still alive!' : `they's ded....`}</p>
            <p>Ancestry: {ancestry ? ancestry : 'Unknown'}</p>
            <p>Patronus: {patronus ? patronus : 'Unknown'}</p>
            <p>Species: {species ? species : 'Unknown'}</p>
            <p>Wand: {wand ? wand : 'Unknown'}</p>
        </div>
    )
}
