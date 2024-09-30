const searchButton = document.getElementById("search-button")
const searchInput = document.getElementById("search-input")
const pokemonApi = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/"

const [
    HP, 
    ATTACK,
    DEFENSE,
    SPECIAL_ATTACK,
    SPECIAL_DEFENSE,
    SPEED
] = [0, 1, 2, 3, 4, 5]


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
    document.getElementById("sprite").src = (e.sprites.front_default)
    document.getElementById("hp").innerText = e.stats[HP].base_stat;
    document.getElementById("attack").innerText = e.stats[ATTACK].base_stat;
    document.getElementById("defense").innerText = e.stats[DEFENSE].base_stat 
    document.getElementById("special-attack").innerText = e.stats[SPECIAL_ATTACK].base_stat;
    document.getElementById("special-defense").innerText = e.stats[SPECIAL_DEFENSE].base_stat 
    document.getElementById("speed").innerText = e.stats[SPEED].base_stat 
    document.getElementById("types").innerHTML = "";
    for (const type of e.types){
        const li = document.createElement("li")
        li.innerText = type.type.name.toUpperCase();
        document.getElementById("types").append(li)
    }
}


searchButton.addEventListener("click", searchPokemon)
