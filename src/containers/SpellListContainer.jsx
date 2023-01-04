import React, { Component } from 'react';
import SpellList from '../components/characters/SpellList';
import { getHPspells } from '../services/hpApi';
import style from '../components/characters/character.css';

export default class HpSpellListContainer extends Component {
    state = {
        loading: true,
        spells: [],
    };

    async componentDidMount() {
        const spells = await getHPspells();
        console.log('hiiiii', spells);
        this.setState({
            spells: spells,
            loading: false
        });
    };

    render() {
        if (this.state.loading) return <h2>Loading... </h2>;

        return (
            <div className={style.listPg}>
                <SpellList spells={this.state.spells} />
            </div>
        );
    }
}