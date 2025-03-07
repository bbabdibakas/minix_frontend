import {AppRoutesProps, routeConfig} from "../lib/routeConfig";
import {Route, Routes} from "react-router";
import {RequireAuth} from "./RequireAuth";

const AppRouter = () => {
    const renderWithWrapper = (route: AppRoutesProps) => {
        const element = (
            <>
                {route.element}
            </>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.isRequiredAuth ? <RequireAuth>{element}</RequireAuth> : element}
            />
        )
    }

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
}

export default AppRouter;