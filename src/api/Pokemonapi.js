import axios from 'axios'

const PokemonsApi= axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon'
});

export default PokemonsApi