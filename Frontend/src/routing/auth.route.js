import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";


export const authRoute = createRoute({
    getParentRoute: ()=> rootRoute,
    path: '/auth',
    component: AuthPage,
    component: AuthPage
})