import {RegisterForm} from "features/Register";
import {AppButton} from "shared/ui/AppButton/AppButton";
import {LoginModal} from "features/Login";
import {useState} from "react";
import * as styles from "./AuthPage.module.scss"

const AuthPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const onModalOpen = () => {
        setIsModalOpen(true);
    }

    const onModalClose = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="page">
            <div className={styles.page}>
                <RegisterForm/>
                <div className={styles.form}>
                    <p>
                        Already have an account?
                    </p>
                    <AppButton onClick={onModalOpen}>
                        Login
                    </AppButton>
                    {
                        isModalOpen && <LoginModal isOpen={isModalOpen} onClose={onModalClose}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default AuthPage