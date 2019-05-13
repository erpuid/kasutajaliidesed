<template>
    <div class="table-responsive px-5">
        <table class="table">
            <thead>
            <tr>
                <th scope="col" style="width: 60%">Esemed</th>
                <th scope="col">Suurus</th>
                <th scope="col">Maitse</th>
                <th scope="col" style="width: 15%">Hind</th>
            </tr>
            </thead>
            <tbody>
            <cart-product
                    v-for="product in cartItems"
                    v-bind:key="product.productName"
                    v-bind:allData="product"
                    v-bind:calculateTotalParent="calculateTotal"
            />
            </tbody>
        </table>
        <h5 class="float-right">Kokku: {{totalPrice}}</h5>
    </div>
</template>

<script>
    import {cartItems} from "../cartItems/variables";
    import CartProduct from "./cartProduct";
    export default {
        name: "CartTable",
        components: {CartProduct},
        data: function() {
            return {
                cartItems,
                totalPrice: 0
            }
        },
        methods: {
            calculateTotal() {
                this.totalPrice = 0;
                for (var i = 0; i < this.cartItems.length; i++) {
                    this.totalPrice += this.cartItems[i].price;
                }
            }
        },
        mounted() {
            for (var i = 0; i < this.cartItems.length; i++) {
                this.totalPrice += this.cartItems[i].price;
            }
        }
    }
</script>

<style scoped>

</style>