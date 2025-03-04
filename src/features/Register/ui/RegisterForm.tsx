import {AppInput} from "shared/ui/AppInput/AppInput";
import {AppButton} from "shared/ui/AppButton/AppButton";
import {registerActions} from "../model/slice/registerSlice";
import {useDispatch, useSelector} from "react-redux";
import {getRegisterName} from "../model/selectors/getRegisterName";
import {getRegisterUsername} from "../model/selectors/getRegisterUsername";
import {getRegisterPassword} from "../model/selectors/getRegisterPassword";
import * as styles from './RegisterForm.module.scss'

const RegisterForm = () => {
    const dispatch = useDispatch();

    const name = useSelector(getRegisterName);
    const username = useSelector(getRegisterUsername);
    const password = useSelector(getRegisterPassword);

    const onChangeName = (value: string) => {
        dispatch(registerActions.setName(value))
    }

    const onChangeUsername = (value: string) => {
        dispatch(registerActions.setUsername(value))
    }

    const onChangePassword = (value: string) => {
        dispatch(registerActions.setPassword(value))
    }

    const onSubmit = () => {
        alert('Registered successfully.')
        console.log({name, username, password})
    }

    return (
        <div className={styles.RegisterForm}>
            <AppInput value={name} placeholder={'Name'} onChange={onChangeName}/>
            <AppInput value={username} placeholder={'Username'} onChange={onChangeUsername}/>
            <AppInput value={password} placeholder={'Password'} onChange={onChangePassword}/>
            <AppButton className={styles.button} onClick={onSubmit}>
                Login
            </AppButton>
        </div>
    )
}

export default RegisterForm