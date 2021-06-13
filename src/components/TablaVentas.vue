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
            <tbody v-if="juegosConStock && juegosConStock.length === 0">
                <tr class="text-center">
                    <td colspan="4" class="py-4 display-5">No hay Stock de juegos disponibles</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr scope="row" v-for="(juegos, i) in juegosConStock" :key="i">
                    <td> {{juegos.codigo}}</td>
                    <td> {{juegos.nombre}}</td>
                    <td> {{juegos.stock}}</td>
                    <td> {{juegos.precio}}</td>
                    <td> <button :style="{'background-color': juegos.color}" class="btn fw-bold" @click="vender">Vender</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

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
    },
}
</script>