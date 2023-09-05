const urlParams = new URLSearchParams(location.search);
const id = urlParams.get('id');
let infoPok = {}

console.log(urlParams.get('id'));

const getPokemon = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

    return fetch(url)
        .then((response) => response.json())
        .then((response) => document.body.innerHTML = `
        <div class=${response.types[0].type.name}>
            <h1>${response.name}</h1>
            <img src="${response.sprites.front_default}" alt="${response.name}">
            <p>Id: ${response.id}</p>
            <p>Height: ${response.height}</p>
            <p>Weight: ${response.weight}</p>
            <p>Type: ${response.types[0].type.name}</p>
            <p>Ability: ${response.abilities[0].ability.name}</p>
            <p>Type: ${response.types.map(each =>{
                return each.type.name
            })}</p>
        </div>
        `)

        
}
getPokemon(id)