import React from 'react';
import style from './character.css';

export default function SpellList({ spells }) {
    return (
        <div className={style.spellPg}>
            <h2>Harry Potter Spells</h2>
            <small>Looking for the full list of HP characters? <a href="/">Click Here</a></small>
            <ul aria-label='spell-list'>
                {spells.map((spell) => {
                    return (
                        <li key={spell.name} className={style.spell}>
                            💫 {spell.name}: <span className={style.info}>{spell.description}.</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}