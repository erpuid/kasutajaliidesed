<template>
    <div>
        <h1 class="text-center my-2">Sinu ostukorv</h1>
        <div class="thank">
            <CartTable />
            <router-link to="/Customer" class="btn btn-primary" style="float: right;">Checkout</router-link>
        </div>

    </div>
</template>

<script>
    import CartTable from "../components/CartTable";
    import {cartItems} from "../cartItems/variables";

    export default {
        name: "ShoppingCart",
        components: {CartTable},
        data: function () {
            return {
                cartItems
            }
        }
    }
</script>

<style scoped>
    body {
        background-color: #F3F3F3;
        height: 100%;
    }

    .img-responsive {
        width: 100%;
    }

    .logo {
        height: auto;
        width: 45px;
        background-color: #01A2A6;
    }

    .navbar-dark {
        background-color: #01A2A6;
    }

    .container {
        background-color: #F3F3F3;
    }

    .card {
        background-color: #F3F3F3;
        outline: none;
    }

    .col {
        outline: none;
    }

    .li a {
        color: white;
    }

    .social-media {
        width: 10%;
        margin-left: 10px;
    }

    .filter-link {
        border-bottom: 1px solid black;
        width: 100px;
    }

    a.nav-link.text-dark {
        border-bottom: 1px solid black;
    }

    .filter-item {
        padding-left: 20px;
    }

    .product-headline {
        border-bottom: 1px solid black;
        padding-bottom: 10px;
    }
    .thank {
        min-height: calc(100vh - 300px);
    }

</style>