import React, { Component } from 'react';
import CharacterDetail from '../components/characters/CharacterDetail';
import { getHPcharacters } from '../services/hpApi';
import style from '../components/characters/character.css';


export default class HpDetailContainer extends Component {
    state = {
        loading: true,
        character: {},
    };

    async componentDidMount() {
        const characters = await getHPcharacters();
        const selectedCharacter = characters.find(el => el.name === this.props.match.params.name);

        this.setState({
            character: selectedCharacter,
            loading: false
        });
    };

    render() {
        const { name, image, house, alive, ancestry, patronus, species, wand } = this.state.character;

        if (this.state.loading) return <h2>Loading... </h2>;

        return (
            <div className={style.detailPg}>
                <h2>Harry Potter Character Detail Page</h2>
                <CharacterDetail
                    name={name}
                    image={image}
                    house={house}
                    alive={alive}
                    ancestry={ancestry}
                    patronus={patronus}
                    species={species}
                    wand={wand} />
            </div >
        )
    }
}
