import User from "../Pages/User"
import Product from "../Pages/Product"
import Login from "../Pages/Login"
import MainLayout from "../Layout/MainLayout"
import LoginLayout from "../Layout/LoginLayout"

const routers = [
    {path: '/user', component: User, layout: MainLayout},
    {path: '/product', component: Product, layout: MainLayout},
    {path: '/', component: Login, layout: LoginLayout}
]

export default routers