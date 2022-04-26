<template>
  <h1>Quien es ese pokemon?</h1>
  <pokemonpicture :pokemonId="4" :imgpoke="true" />
  <pokemonoptions  :pokemons="pokemonarr"/>
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
      pokemon:null
    }
  },
  methods:{
    async mixPokemonsArr(){
       this.pokemonarr = await getPokemonoptions()
    }
  },
  mounted(){
    this.mixPokemonsArr()
  }
}
</script>

<style>
</style>