<template>
<h1>Quien es ese pokemon?</h1>
 <pokemonpicture :pokemonId="4" :imgpoke="true"/>
 <pokemonoptions/>
</template>

<script>
import Pokemonoptions from '../components/Pokemonoptions.vue'
import Pokemonpicture from '../components/Pokemonpicture.vue'
import getPokemonoptions from '@/helpers/getOptions'
console.log(getPokemonoptions());
export default {
  components: { Pokemonpicture, Pokemonoptions },

}
</script>

<style>

</style>