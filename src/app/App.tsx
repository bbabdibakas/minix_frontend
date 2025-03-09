import {useAppDispatch} from 'shared/lib/useAppDispatch/useAppDispatch';
import {useEffect} from 'react';
import {userActions, getUserInitialized, getUserData} from 'entities/User';
import {AppRouter} from 'app/providers/AppRouter';
import {useSelector} from 'react-redux';
import {Sidebar} from '../widgets/Sidebar';

const App = () => {
    const dispatch = useAppDispatch();
    const userData = useSelector(getUserData);
    const isInitialized = useSelector(getUserInitialized);

    useEffect(() => {
        dispatch(userActions.initUserData())
    }, [dispatch])

    return (
        <div className="wrapper">
            <div className="container">
                {userData && <Sidebar/>}
                {isInitialized && <AppRouter/>}
            </div>
        </div>
    )
}

export default App