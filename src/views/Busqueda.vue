<template>
    <div>
        <h1>Lista de Juegos Disponibles</h1>
        <h3 class="my-3 fw-bold">Cantidad de juegos: {{ cantidadJuegos }}</h3>
        <div class="container mt-4">
            <div class="row">
                <div class="col-4 ms-auto">
                    <label class="form-label">Filtro</label>
                    <input type="text" ref="focusMe" class="form-control" v-model="filtro" @keyup.enter="filtrar"/></div>                
                <div class="col-12" v-if="juegos">
                    <Tabla :productos="juegos"> </Tabla>
                </div>
                <div class="col-12" v-else>
                    <h2>No es posible trae los juegos</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tabla from "@/components/Tabla.vue"
import { mapState, mapGetters, mapMutations } from "vuex"

export default {
    name: "Busqueda",
    data() {
        return {
            filtro: ""
        }
    },
    components: {
        Tabla,
    },
    computed: {
        ...mapState(["juegos"]),
        ...mapGetters(["cantidadJuegos"])
    },
    methods: {
        ...mapMutations(["añadirPalabra"]),
        filtrar() {
            this.añadirPalabra(this.filtro)
        }
    },
}
</script>