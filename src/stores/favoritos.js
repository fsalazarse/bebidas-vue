import {ref, watch} from 'vue'
import {defineStore} from 'pinia'
import {useBebidasStore} from './bebidas'

export const useFavoritoStore = defineStore('favoritos',() => {

    const bebidas = useBebidasStore()
    const favoritos = ref([])

    const  handleClickFavorito = () => {
        favoritos.value.push(bebidas.receta);
    }

    watch(favoritos, () => {
        sincronizarLocalStorage()
    }, {
        deep: true
    })

    const sincronizarLocalStorage = () => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }



    return {
        favoritos,
        handleClickFavorito
    }
})