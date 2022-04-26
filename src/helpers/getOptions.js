import Pokemonapi from '../api/Pokemonapi'

const Pokemons=()=>{
    const pokemonsarr= Array.from(Array(650 ));
   return  pokemonsarr.map((_,index)=>index+1);
}

const getPokemonoptions=async ()=>{
  const mixisPokemon= Pokemons().sort(()=>Math.random() - 0.5);
  
  const pokemons= await getPokemonNames(mixisPokemon.splice(0,4));
  // console.table(pokemons);
  return pokemons
}
const getPokemonNames=async ( [a,b,c,d] = [])=>{

  const promiseArr=[
    Pokemonapi.get(`/${a}`),
    Pokemonapi.get(`/${b}`),
    Pokemonapi.get(`/${c}`),
    Pokemonapi.get(`/${d}`)
  ]

  const [p1,p2,p3,p4] =await Promise.all(promiseArr)
  //  console.log(p1,p2,p3,p4);

 return [
   {name:p1.data.name,id:p1.data.id},
   {name:p2.data.name,id:p2.data.id},
   {name:p3.data.name,id:p3.data.id},
   {name:p4.data.name,id:p4.data.id},
 ]

//  const respuesta =await Pokemonapi.get('/4')

//  console.log(respuesta.data.name,respuesta.data.id);
}

export default getPokemonoptions