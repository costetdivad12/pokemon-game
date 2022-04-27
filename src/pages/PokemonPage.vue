<template>
  <h2 v-if="!pokemon">Espere por favor ...</h2>
  <div v-else>
  <h1>Quien es ese pokemon?</h1>
  <pokemonpicture :pokemon-id="pokemon.id" :imgpoke="showpokemon" />
  <pokemonoptions  
  :pokemons="pokemonarr"
  @selection-pokemon="checkAnswer($event)"
  />
  <div v-if="showanswer">    
  <h3>{{mensaje}}</h3>
  <button class="fade-in" @click="newgame">
    Nuevo juego
  </button>
  </div>
  </div>
</template>

<script>
import Pokemonoptions from "../components/Pokemonoptions.vue";
import Pokemonpicture from "../components/Pokemonpicture.vue";
import getPokemonoptions from "@/helpers/getOptions";

// console.log(getPokemonoptions());
export default {
  components: { Pokemonpicture, Pokemonoptions },
  data() {
    return {
      pokemonarr:[],
      pokemon:null,
      showpokemon:false,
      showanswer:false,
      mensaje:'',
      pokemon:null
    }
  },
  methods:{
    async mixPokemonsArr(){
       this.pokemonarr = await getPokemonoptions()
       const randomint= Math.floor(Math.random()*4)
       this.pokemon=this.pokemonarr[randomint]
      //  console.log(this.pokemon)
    },
    checkAnswer(pokemonid){
      this.showpokemon=true
      this.showanswer=true
      if( pokemonid===this.pokemon.id ){
        this.mensaje=`Correcto,  ${this.pokemon.name }`
      }else {
        this.mensaje=`Pokemon incorrecto. Era ${this.pokemon.name}`
      }
    },
    newgame(){
       
      this.pokemon=null
      this.showpokemon=false
      this.showanswer=false
      
      this.pokemonarr=[]
      this.mixPokemonsArr()
    }
  },
  mounted(){
    this.mixPokemonsArr()
  }
}
</script>

<style>
</style>