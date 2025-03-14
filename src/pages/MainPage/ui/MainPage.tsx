import {AppButton} from 'shared/ui/AppButton/AppButton';
import {userActions} from 'entities/User';
import {useAppDispatch} from 'shared/lib/useAppDispatch/useAppDispatch';

const MainPage = () => {
    const dispatch = useAppDispatch();

    const onLogout = () => {
        dispatch(userActions.removeUserData());
    }

    return (
        <div className="page">
            <AppButton onClick={onLogout}>
                Logout
            </AppButton>
        </div>
    )
}

export default MainPage