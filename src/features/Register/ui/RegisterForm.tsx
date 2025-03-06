import {AppInput} from "shared/ui/AppInput/AppInput";
import {AppButton} from "shared/ui/AppButton/AppButton";
import {registerActions} from "../model/slice/registerSlice";
import {useSelector} from "react-redux";
import {getRegisterForm} from "../model/selectors/getRegisterForm";
import {register} from "../model/services/register";
import {getRegisterValidateErrors} from "../model/selectors/getRegisterValidateErrors";
import {getRegisterServerErrors} from "../model/selectors/getRegisterServerErrors";
import {getRegisterIsLoading} from "../model/selectors/getRegisterIsLoading";
import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {ValidateRegisterFormError} from "../model/types/RegisterState";
import * as styles from './RegisterForm.module.scss'

const RegisterForm = () => {
    const dispatch = useAppDispatch();

    const {name, username, password} = useSelector(getRegisterForm);
    const validateErrors = useSelector(getRegisterValidateErrors)
    const serverErrors = useSelector(getRegisterServerErrors)
    const isLoading = useSelector(getRegisterIsLoading)

    const onChangeName = (value: string) => {
        dispatch(registerActions.setName(value))
    }

    const onChangeUsername = (value: string) => {
        dispatch(registerActions.setUsername(value))
    }

    const onChangePassword = (value: string) => {
        dispatch(registerActions.setPassword(value))
    }

    const onSubmit = async () => {
        const result = await dispatch(register())
        if (result.meta.requestStatus === 'fulfilled') {
            alert('Registered successfully.')
        }
    }

    if (isLoading) {
        return (
            <div className={styles.RegisterForm}>
                Loading...
            </div>
        )
    }

    return (
        <div className={styles.RegisterForm}>
            <div className={styles.title}>
                Welcome to minix!
            </div>
            {serverErrors?.map((error, index) => (
                <div className={styles.error} key={index}>
                    {error}
                </div>))
            }
            {validateErrors?.map((error, index) => (
                <div className={styles.error} key={index}>
                    {error}
                </div>))
            }
            <AppInput
                value={name}
                placeholder={'Name'}
                onChange={onChangeName}
                hasError={validateErrors?.includes(ValidateRegisterFormError.INCORRECT_NAME)}
            />
            <AppInput
                value={username}
                placeholder={'Username'}
                onChange={onChangeUsername}
                hasError={validateErrors?.includes(ValidateRegisterFormError.INCORRECT_USERNAME)}
            />
            <AppInput
                value={password}
                placeholder={'Password'}
                onChange={onChangePassword}
                hasError={validateErrors?.includes(ValidateRegisterFormError.INCORRECT_PASSWORD)}
            />
            <AppButton className={styles.button} onClick={onSubmit}>
                Register
            </AppButton>
        </div>
    )
}

export default RegisterForm