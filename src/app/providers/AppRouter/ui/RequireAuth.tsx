import {ReactNode} from 'react';
import {useSelector} from 'react-redux';
import {getUserData} from 'entities/User';
import {Navigate, useLocation} from 'react-router';
import {routePath} from '../lib/routeConfig';

interface RequireAuthProps {
    children: ReactNode;
}

export const RequireAuth = ({children}: RequireAuthProps) => {
    const userData = useSelector(getUserData)
    const location = useLocation();

    if (!userData) {
        return <Navigate to={routePath.auth} state={{from: location}} replace/>
    }

    return children
}