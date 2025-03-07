import {RouteProps} from "react-router";
import {MainPage} from "pages/MainPage";
import {ProfilePage} from "pages/ProfilePage";

export enum AppRoutes {
    MAIN = 'main',
    PROFILE = 'profile',
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profile',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routePath.main,
        element: <MainPage/>
    },
    [AppRoutes.PROFILE]: {
        path: routePath.profile,
        element: <ProfilePage/>
    },
}