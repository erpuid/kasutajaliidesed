<template>
    <div>
        <div class="jumbotron my-3">
        </div>
        <div class="row">
            <div class="hidden-xs col-md-2">
                <div class="card mt-5 ">
                    <ul class="list-unstyled">
                        <p class="ml-4 mt-3 text-dark font-weight-bold">Filtreeri</p>
                        <b-button variant="light" class="filter-button ml-1" v-on:click="showAll">Kõik tooted</b-button>
                        <b-button variant="light" class="filter-button ml-1" v-on:click="filter('protein')">Valgupulbrid</b-button>
                        <b-button variant="light" class="filter-button ml-1" v-on:click="filter('creatine')">Kreatiinid</b-button>
                    </ul>
                </div>
            </div>
            <all-products v-bind:sortedProducts="sortedProducts" class="col-md-10"/>
        </div>
    </div>
</template>

<script>

    import AllProducts from "../components/AllProducts";
    import json from '../assets/json/data';


    export default {
        name: "Products",
        data() {
            return {
                allProducts: AllProducts,
                sortedProducts: json,
                jsonProducts: json
            }
        },
        components: {
            AllProducts
        },
        methods: {
            filter(criteria) {
                this.sortedProducts = [];
                for (var i = 0; i < this.jsonProducts.length; i++) {
                    if (this.jsonProducts[i].category === criteria) {
                        this.sortedProducts.push(this.jsonProducts[i])
                    }
                }
            },
            showAll() {
                this.sortedProducts = this.jsonProducts;
            }
        }
    }
</script>

<style>
    body {
        background-color: #F3F3F3;
        height: 100%;
    }
    .filter-button {
        background-color: #F3F3F3;
    }

    .jumbotron {
        background-image: url("../assets/muscularMan.jpeg");
        background-size: cover;
        height: 250px;
    }

    .card {
        background-color: #F3F3F3;
        outline: none;
    }

    .li a {
        color: white;
    }
</style>