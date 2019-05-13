<template>
    <div>
        <div class="jumbotron my-3" />
        <div class="row mb-3" style="border-bottom: 1px solid black">
            <div class="col-sm-12 col-md-6 my-3">
                <img v-bind:src="require('../assets/' + allData.image)" class="card-img-top">
            </div>
            <div class="col-md-6 col-sm-12 my-3">
                <h3 class="product-headline">{{allData.productName}}</h3>
                <p class="lead text-justify product-headline">{{allData.description}}</p>
                <h3 class="mb-2">Maitse</h3>
                <SelectMenu v-model="taste" v-bind:options="allData.taste" />

                <h3>Suurus</h3>
                <SelectMenu v-model="size" v-bind:options="allData.sizes" />


                <h3 class="priceEl" v-if="price != 0">{{price}}€</h3>
                <div v-if="taste != '' && price != 0">
                    <button class="btn btn-secondary" v-on:click="addToCart">Lisa ostukorvi</button>
                </div>
            </div>
        </div>
        <h3>Toitumisalane teave</h3>
        <nutrition />
    </div>
</template>

<script>

    import Nutrition from "../components/Nutrition";
    import SelectMenu from "../components/SelectMenu";
    import {cartItems} from "../cartItems/variables";
    export default {
        name: "Product",
        props: {
            allData: Object,

        },
        data: function () {
            return {
                taste: '',
                size: '',
                price: 0,
                specifications: {
                    productName: String,
                    size: String,
                    price: Number,
                    taste: String,
                    image: String
                }
            }
        },
        components: {SelectMenu, Nutrition},

        methods: {
            addToCart: function () {
                cartItems.push(this.specifications);
                this.$router.push("/cart")
            }
        },
        mounted() {
            this.specifications.productName = this.allData.productName;
            this.specifications.size = this.allData.sizes[0];
            this.specifications.price = 0;
            this.specifications.taste = this.allData.taste[0];
            this.specifications.image = this.allData.image;
        }
        ,watch: {
            size: function (val) {
                this.size = val;
                this.price = this.allData.prices[this.allData.sizes.indexOf(this.size)];
                this.specifications.price = this.price;
                this.specifications.size = this.size;
            },
            taste: function (val) {
                this.taste = val;
                this.specifications.taste = this.taste;
            }
        }
    }
</script>

<style scoped>
    .jumbotron {
        background-image: url("../assets/muscularMan.jpeg");
        background-size: cover;
        height: 250px;
    }

    .li a {
        color: white;
    }

    .product-headline {
        border-bottom: 1px solid black;
        padding-bottom: 10px;
    }


</style>