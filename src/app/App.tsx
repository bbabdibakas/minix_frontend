import {RegisterForm} from "features/Register";
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useEffect, useState} from "react";
import {getUserData, userActions} from "entities/User";
import {AppButton} from "shared/ui/AppButton/AppButton";
import {AppModal} from "shared/ui/AppModal/AppModal";

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const userData = useSelector(getUserData)

    const onModalOpen = () => {
        setIsModalOpen(true);
    }

    const onModalClose = () => {
        setIsModalOpen(false);
    }

    const onLogout = () => {
        dispatch(userActions.removeUserData());
    }

    useEffect(() => {
        dispatch(userActions.initUserData())
    }, [dispatch])

    if (!userData) {
        return (
            <div className="wrapper">
                <div className="container">
                    <RegisterForm/>
                    <div className="form">
                        <p>
                            Already have an account?
                        </p>
                        <AppButton onClick={onModalOpen}>
                            Login
                        </AppButton>
                        <AppModal isOpen={isModalOpen} onClose={onModalClose}>
                            Login page
                        </AppModal>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="wrapper">
            <div className="container">
                Logged.
                <AppButton onClick={onLogout}>
                    Logout
                </AppButton>
            </div>
        </div>
    )
}

export default App