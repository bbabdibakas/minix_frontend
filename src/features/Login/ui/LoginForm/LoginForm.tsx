import {AppInput} from 'shared/ui/AppInput/AppInput';
import {AppButton} from 'shared/ui/AppButton/AppButton';
import {loginActions} from '../../model/slice/loginSlice';
import {useSelector} from 'react-redux';
import {getLoginForm} from '../../model/selectors/getLoginForm';
import {login} from '../../model/services/login';
import {getLoginValidateErrors} from '../../model/selectors/getLoginValidateErrors';
import {getLoginServerErrors} from '../../model/selectors/getLoginServerErrors';
import {getLoginIsLoading} from '../../model/selectors/getLoginIsLoading';
import {useAppDispatch} from 'shared/lib/useAppDispatch/useAppDispatch';
import {ValidateLoginFormError} from '../../model/types/LoginState';
import {useNavigate} from 'react-router';
import {routePath} from 'app/providers/AppRouter';
import * as styles from './LoginForm.module.scss'

interface LoginFormProps {
    onSuccess: () => void;
}

const LoginForm = ({onSuccess}: LoginFormProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {username, password} = useSelector(getLoginForm);
    const validateErrors = useSelector(getLoginValidateErrors)
    const serverErrors = useSelector(getLoginServerErrors)
    const isLoading = useSelector(getLoginIsLoading)

    const onChangeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value))
    }

    const onChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value))
    }

    const onSubmit = async () => {
        const result = await dispatch(login())
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
            await navigate(routePath.main)
        }
    }

    if (isLoading) {
        return (
            <div className={styles.LoginForm}>
                Loading...
            </div>
        )
    }

    return (
        <div className={styles.LoginForm}>
            <div className={styles.title}>
                Welcome back to minix!
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
                value={username}
                placeholder={'Username'}
                onChange={onChangeUsername}
                hasError={validateErrors?.includes(ValidateLoginFormError.INCORRECT_USERNAME)}
            />
            <AppInput
                value={password}
                placeholder={'Password'}
                onChange={onChangePassword}
                hasError={validateErrors?.includes(ValidateLoginFormError.INCORRECT_PASSWORD)}
            />
            {/*
                TODO: fix later
             */}
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <AppButton className={styles.button} onClick={onSubmit}>
                Login
            </AppButton>
        </div>
    )
}

export default LoginForm