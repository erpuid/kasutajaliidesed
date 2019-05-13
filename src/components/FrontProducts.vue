<template>
    <div class="row">
            <top-product class="col-sm-12 col-md-4"
                v-for="data in myJson"
                v-bind:key="data.productName"
                v-bind:image="data.image"
                v-bind:productName="data.productName"
                v-bind:allData="data"
            />
    </div>


</template>

<script>
    import topProduct from '../components/TopProduct';
    import json from '../assets/json/top';


    export default {
        name: 'frontProducts',
        data() {
            return {
                myJson: json
            }
        },
        components: {
            topProduct
        }
    }


</script>

<style>


</style>