const searchButton = document.getElementById("search-button")
const searchInput = document.getElementById("search-input")
const pokemonApi = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/"


function searchPokemon(e){
    let value = searchInput.value;
    if((typeof value) === (typeof "string")){
        value = value.toLowerCase();
    }
    fetch(pokemonApi+value)
        .then(r => r.json())
        .then(doStuff)
        .catch(r => {
            alert("Pokémon not found")
            return console.error(r.error)
            
        })
}

function doStuff(e){
    console.log(e)
    document.getElementById("pokemon-name").innerText = e.name
    document.getElementById("pokemon-id").innerText = e.id;
    document.getElementById("weight").innerText = e.weight;
    document.getElementById("height").innerText = e.height
    document.getElementById("hp").innerText = "hp";
    document.getElementById("attack").innerText = "atack";
    document.getElementById("defense").innerText = "defense"
    document.getElementById("special-attack").innerText = "sp Atack0"
    document.getElementById("special-defense").innerText = "sp defense";
    document.getElementById("speed").innerText = "speed"
}

searchButton.addEventListener("click", searchPokemon)