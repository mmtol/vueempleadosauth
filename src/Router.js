import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import PerfilComponent from "./components/PerfilComponent.vue";
import SubsComponent from "./components/SubsComponent.vue";

const rutas =
[
    {
        path:"/",
        component:HomeComponent
    },
    {
        path:"/login",
        component:LoginComponent
    },
    {
        path:"/perfil",
        component:PerfilComponent
    },
    {
        path:"/subs",
        component:SubsComponent
    }
]

const router = createRouter(
    {
        history:createWebHistory(),
        routes:rutas
    }
)

export default router;
