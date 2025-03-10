import {RouteProps} from 'react-router';
import {MainPage} from 'pages/MainPage';
import {ProfilePage} from 'pages/ProfilePage';
import {AuthPage} from 'pages/AuthPage';

export type AppRoutesProps = RouteProps & {
    isRequiredAuth?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    PROFILE = 'profiles',
    AUTH = 'auth',
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profiles/', //:username
    [AppRoutes.AUTH]: '/auth',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: routePath.main,
        element: <MainPage/>,
        isRequiredAuth: true
    },
    [AppRoutes.PROFILE]: {
        path: `${routePath.profiles}:username` ,
        element: <ProfilePage/>,
        isRequiredAuth: true
    },
    [AppRoutes.AUTH]: {
        path: routePath.auth,
        element: <AuthPage/>
    },
}