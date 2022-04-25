const Pokemons=()=>{
    const pokemonsarr= Array.from(Array(650 ));
   return  pokemonsarr.map((_,index)=>index+1);
}

const getPokemonoptions= ()=>{
  console.log( Pokemons());
}

export default getPokemonoptions