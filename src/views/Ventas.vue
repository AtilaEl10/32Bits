<template>
    <div>
        <h1>Venta de Juegos</h1>
        <h2>Juegos con Stock:{{juegosStock}}</h2>
         <div class="container mt-4">
            <div class="row">                
                <div class="col-12" v-if="juegos">
                    <TablaVentas :productos="juegos"> </TablaVentas>
                </div>
                <div class="col-12" v-else>
                    <h2>No es posible trae los juegos</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TablaVentas from "@/components/TablaVentas.vue"
import { mapGetters, mapMutations, mapState } from "vuex"

export default {
    components: {
        TablaVentas,
    },
    computed: {
        ...mapState(["juegos"]),
        ...mapGetters(["juegosStock"])

    },
    methods: {
        ...mapMutations(["quitarStock"]),
        vender() {
            this.quitarStock()
        }
    },
}
</script>
