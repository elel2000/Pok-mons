const fetchPoke = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/1`;
    fetch(url)
        .then(response => {return response.json();})
        .then(data =>  
            {console.log(data);
            const pokemon = {
                id : data.id,
                name : data.name,
                image : data.sprites["front_default"] ,
                type : data.types.map((type) => type.type.name).join(", ") ,
                };
            console.log(pokemon)})
}

fetchPoke();