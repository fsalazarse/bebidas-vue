<script setup> 
    import {useBebidasStore} from '../stores/bebidas'
    import Receta from '../components/Receta.vue';
    
    const bebidas = useBebidasStore()

</script>

<template>
    <h1 class="text-6xl font-extrabold">Receta</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">  
        <Receta 
            v-for="receta in bebidas.recetas"
            :receta="receta"
            :key = "receta.strDrink"
            
        />
    </div>
</template>
<style scoped>
</style>