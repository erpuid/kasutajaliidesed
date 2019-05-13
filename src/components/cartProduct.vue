<template>
    <tr>
        <td class="col-md6">
            <img v-bind:src="require('../assets/' + allData.image)" style="width: 20%">
            <b style="vertical-align: top">{{allData.productName}}</b>
        </td>
        <td>
            <p>{{allData.size}}</p>
        </td>
        <td>{{allData.taste}}</td>
        <td>{{allData.price}}€
            <a class="ml-2" v-on:click="removeItem">
                <img src="../assets/x-image.jpg" style="width: 15px;">
            </a>
        </td>
    </tr>
</template>

<script>
    import {cartItems} from "../cartItems/variables";
    export default {
        name: "cartProduct",
        props: {
            allData: Object,
            calculateTotalParent: Function
        },
        methods: {
            removeItem() {
                const index = cartItems.indexOf(this.allData);
                if (index > -1) {
                    cartItems.splice(index, 1);
                }
                this.calculateTotalParent();
                this.$router.push("/cart")
            }
        }
    }
</script>

<style scoped>

</style>