import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useEffect} from "react";
import {userActions, getUserInitialized} from "entities/User";
import {AppRouter} from "app/providers/AppRouter";
import {useSelector} from "react-redux";

const App = () => {
    const dispatch = useAppDispatch();
    const isInitialized = useSelector(getUserInitialized);

    useEffect(() => {
        dispatch(userActions.initUserData())
    }, [dispatch])

    return (
        <div className="wrapper">
            <div className="container">
                {isInitialized && <AppRouter/>}
            </div>
        </div>
    )
}

export default App