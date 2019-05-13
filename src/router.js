import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Products from './views/Products.vue'
import Product from './views/Product'
import ShoppingCart from  './views/ShoppingCart'
import Customer from './views/Customer'
import Thank from './views/Thank'
import DashBoard from './views/DashBoard'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        },
        {
            path: '/product/:allData',
            name: 'product',
            component: Product,
            props: true
        },
        {
            path: '/cart',
            name: 'cart',
            component: ShoppingCart,
        },
        {
            path: '/customer',
            name: 'customer',
            component: Customer
        },
        {
            path: '/thank',
            name: 'thank',
            component: Thank
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashBoard
        }
    ]
});

export default router;