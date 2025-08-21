import { createRootRoute } from "@tanstack/react-router";
import {homePageRoute} from "./homePage.js";
import {authRoute} from "./auth.route.js";
import {dashboardRoute} from "./dashboard.route.js";
import {RootLayout} from "../layout/RootLayout";



export const rootRoute = createRootRoute({
    component: RootLayout
})

export const routeTree = rootRoute.addChildren([
    homePageRoute,
    authRoute,
    dashboardRoute
])