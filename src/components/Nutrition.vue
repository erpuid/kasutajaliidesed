<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">100g kohta</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>Energiat</th>
                <td>412 kcal</td>
            </tr>
            <tr>
                <th>Rasvad<br>
                    millest küllastunud rasvhappeid</th>
                <td>7.5g<br>
                    5.0g</td>
            </tr>
            <tr>
                <th>Süsivesikud<br>
                    millest suhkrud</th>
                <td>4.0g<br>
                    4.0g</td>
            </tr>
            <tr>
                <th>Valgud</th>
                <td>82g</td>
            </tr>
            <tr>
                <th>Sool</th>
                <td>0.5g</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: "nutrition"
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