import {RegisterForm} from "features/Register";
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useEffect} from "react";
import {getUserData, userActions} from "entities/User";

const App = () => {
    const dispatch = useAppDispatch();
    const userData = useSelector(getUserData)

    useEffect(() => {
        dispatch(userActions.initUserData())
    }, [dispatch])

    return (
        <div className="wrapper">
            <div className="container">
                {
                    !userData ? <RegisterForm/> : 'Logged.'
                }
            </div>
        </div>
    )
}

export default App