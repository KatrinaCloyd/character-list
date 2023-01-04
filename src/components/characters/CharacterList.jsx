import React from 'react';
import Character from './Character';
import style from './character.css';

export default function CharacterList({ characters }) {
    return (
        <div className={style.detailPg}>
            <h2>Harry Potter Character List</h2>
            <small>Looking to add to your own spell casting arsenal? <a href="/spells">Click Here</a></small>
            <ul aria-label='char-list'>
                {characters.map((char) => {
                    return (
                        <li key={char.name}>
                            <Character
                                name={char.name}
                                image={char.image}
                                house={char.house}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
