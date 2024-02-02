const fetchPoke = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/1`;
    fetch(url)
        .then(response => {return response.json();})
        .then(data =>  {console.log(data);})
}

fetchPoke();