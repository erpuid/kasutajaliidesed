<template>
    <div class="card mb-4">
        <img v-bind:src="require('../assets/' + image)" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{productName}}</h5>
            <router-link :to="{name: 'product', params: {allData: this.allData}}" class="btn btn-danger">Osta kohe</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'product',
        props: {
            image: String,
            productName: String,
            description: String,
            sizes: Array,
            taste: Array,
            prices: Array,
            allData: Object
        }
    }

</script>

<style>

    .card {
        background-color: #F3F3F3;
        outline: none;
    }

    .li a {
        color: white;
    }

</style>