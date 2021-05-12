import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { getHPcharacters } from '../services/hpApi';
import style from '../components/characters/character.css';

export default class HpListContainer extends Component {
    state = {
        loading: true,
        characters: [],
    };

    async componentDidMount() {
        const characters = await getHPcharacters();
        this.setState({
            characters: characters,
            loading: false
        });
    };

    render() {
        if (this.state.loading) return <h2>Loading... </h2>;

        return (
            <div className={style.listPg}>
                <CharacterList characters={this.state.characters} />
            </div>
        );
    }
}
