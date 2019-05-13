<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <router-link class="navbar-brand" to="/">
            <img src="@/assets/logo.png" class="img-responsive" alt="Responsive image">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Products">Tooted</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Brändid</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">MyProtein</a>
                        <a class="dropdown-item" href="#">Scitec</a>
                        <a class="dropdown-item" href="#">Fast</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Kontakt</a>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
                </li>
            </ul>

        </div>
        <router-link class="nav-link" to="/cart">
            <img src="@/assets/shoppingCart.png" class="logo">
        </router-link>
    </nav>
</template>

<script>
    export default {
        name: "Header",
    }

</script>

<style>
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