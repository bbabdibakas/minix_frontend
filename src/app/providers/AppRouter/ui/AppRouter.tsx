import {routeConfig} from "../lib/routeConfig";
import {Route, Routes} from "react-router";

const AppRouter = () => {
    return (
        <Routes>
            {
                Object.values(routeConfig).map(({path, element}) => (
                    <Route
                        path={path}
                        key={path}
                        element={element}
                    />
                ))
            }
        </Routes>
    )
}

export default AppRouter;