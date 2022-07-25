import { Cart } from './pages/cart.jsx'
import { Homepage } from './pages/homepage.jsx'

export const routes = [
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/',
        component: Homepage,
    }
]