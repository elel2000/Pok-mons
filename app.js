const pokeStack = document.getElementById("pokeStack");

const fetchPoke = () => {
    const promises = [];
    for(let i = 1 ; i <= 150 ; i++)
        {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            promises.push(fetch(url).then((resp) =>  resp.json()));
        }
        Promise.all(promises) .then((results) => { const pokemon = results.map((data) => ({
             
                id : data.id,
                name : data.name,
                image : data.sprites["front_default"] ,
                type : data.types.map((type) => type.type.name).join(", ") ,
                
        }))
            displayPoke(pokemon);
    });
};

function displayPoke(poke){
    console.log(poke);
    const pokemonHTML = poke.map((pokes) => {
        return `<li class="w3-card-4">
            <img src="${pokes.image}" />
            <h3> ${pokes.name} </h3>
            <p> Type: ${pokes.type} </p><br/>
        </li>`
    })
    console.log (pokemonHTML);
    pokeStack.innerHTML = pokemonHTML.join('');
}
fetchPoke();