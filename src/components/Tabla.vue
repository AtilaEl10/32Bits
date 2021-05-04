<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Stock</th>
                    <th>Precio</th>                
                </tr>
            </thead>
            <tbody v-if="juegosFiltrados && juegosFiltrados.length === 0">
                <tr class="text-center">
                    <td colspan="4" class="py-4 display-5">No hay Stock de juegos disponibles</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr scope="row" v-for="(juegos, i) in juegosFiltrados" :key="i">
                    <td> {{juegos.codigo}}</td>
                    <td> {{juegos.nombre}}</td>
                    <td> {{juegos.stock}}</td>
                    <td> {{juegos.precio}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "Tabla",
    props: {
        productos: {
            type: Array
        }
    },
    computed: {
        juegosConStock() {
            const prod = this.productos  
            if(!prod) return
            
            const filtered = prod.filter(fil => fil.stock > 0)
            if(!filtered) return []

            return filtered
        },
        juegosFiltrados() {
            const juegos = this.juegosConStock
            const filtroVuex = this.filtroCodigo
            if(!filtroVuex) return juegos

            const filtered = juegos.filter(fil => fil.codigo === filtroVuex)
            if (!filtered) return []
            return filtered
        },
        ...mapState(["filtroCodigo"])
    },
}
</script>