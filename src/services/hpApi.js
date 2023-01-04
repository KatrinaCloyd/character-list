export const getHPcharacters = async () => {
    const res = await fetch('https://hp-api.onrender.com/api/characters');
    const charArray = await res.json();

    return charArray.map((char) => ({
        name: char.name,
        image: char.image,
        house: char.house,
        species: char.species,
        ancestry: char.ancestry,
        patronus: char.patronus,
        wand: char.wand.wood,
        alive: char.alive
    }));
}

export const getHPspells = async () => {
    const res = await fetch('https://hp-api.onrender.com/api/spells');
    const spellArray = await res.json();

    return spellArray.map((spell) => ({
        name: spell.name,
        description: spell.description
    }));
}
