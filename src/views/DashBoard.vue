<template>
    <div>
        <div class="row py-4">
            <div class="col">
                <line-chart :chart-data="dataVal.lineData" :options="dataVal.lineOptions"></line-chart>
            </div>
            <div class="col">
                <pie-chart :chart-data="dataVal.pieData" :options="dataVal.pieOptions"></pie-chart>
            </div>
        </div>
        <div class="bar-chart-cont">
            <bar-chart :chart-data="dataVal.barData" :options="dataVal.barOptions"></bar-chart>
        </div>
    </div>
</template>

<script>
    import barOptions from '../assets/json/barOptions'
    import pieOptions from '../assets/json/pieOptions'
    import lineOptions from '../assets/json/lineOptions'
    import LineChart from '../assets/LineChart'
    import BarChart from '../assets/BarChart'
    import pieChart from '../assets/pieChart'
    import axios from 'axios'
    import {BASE_URL} from '../assets/constants'

    export default {
        components: {
            LineChart,
            BarChart,
            pieChart
        },
        data () {
            return {
                dataUrls: {
                    lineData: 'lineData.json',
                    barData: 'bar_graph.json',
                    pieData: 'pieChartData.json',
                },
                dataVal: {
                    lineData: '',
                    barData: '',
                    pieData: '',
                    pieOptions: pieOptions,
                    lineOptions: lineOptions,
                    barOptions: barOptions
                }
            }
        },
        created () {
            const keys = Object.keys(this.dataUrls);
            for (const key of keys) {
                axios.get(BASE_URL + this.dataUrls[key])
                    .then(response => {
                        this.dataVal[key] = response.data;
                    })
                }
        }
    }
</script>

<style>
    body {
        background-color: #F3F3F3;
        height: 100%;
    }

    .col {
        outline: none;
    }

    .li a {
        color: white;
    }

    .bar-chart-cont {
        height: 500px;
    }

</style>