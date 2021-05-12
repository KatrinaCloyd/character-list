import React from 'react';
import Character from './Character';
import style from './character.css';

export default function CharacterList({ characters }) {
    return (
        <div className={style.detailPg}>
            <h2>Harry Potter Character List</h2>
            <ul aria-label='list'>
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
