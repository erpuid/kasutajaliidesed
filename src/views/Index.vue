<template>
    <div>
        <div class="jumbotron my-3">
        </div>
        <div class="row mb-2">
            <div class="col text-center">
                <h3>Top tooted</h3>
            </div>
        </div>
        <frontproducts />
    </div>
</template>

<script>
import Frontproducts from "../components/FrontProducts";

    export default {
        name: 'app',
        components: {
            Frontproducts
        }
    }
</script>

<style>
    .jumbotron {
        background-image: url("../assets/muscularMan.jpeg");
        background-size: cover;
        height: 250px;
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


</style>