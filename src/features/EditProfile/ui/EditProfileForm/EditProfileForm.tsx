import {useAppDispatch} from 'shared/lib/useAppDispatch/useAppDispatch';
import {useSelector} from 'react-redux';
import {getEditProfileForm} from '../../model/selectors/getEditProfileForm';
import {editProfileActions} from '../../model/slice/editProfileSlice';
import {AppPageLoader} from 'shared/ui/AppPageLoader/AppPageLoader';
import {ValidateEditProfileFormError} from '../../model/types/EditProfileState';
import {AppInput} from 'shared/ui/AppInput/AppInput';
import {AppButton} from 'shared/ui/AppButton/AppButton';
import {getEditProfileServerErrors} from '../../model/selectors/getEditProfileServerErrors';
import {getEditProfileIsLoading} from '../../model/selectors/getEditProfileIsLoading';
import {getEditProfileValidateErrors} from '../../model/selectors/getEditProfileValidateErrors';
import {updateProfileById} from '../../model/services/updateProfileById';
import * as styles from './EditProfileForm.module.scss'
import {useEffect} from 'react';
import {User} from 'entities/User';

interface LoginFormProps {
    onSuccess: () => void;
    profileData: User
}

const EditProfileForm = (props: LoginFormProps) => {
    const {
        onSuccess,
        profileData
    } = props

    const dispatch = useAppDispatch();

    const form = useSelector(getEditProfileForm);
    const validateErrors = useSelector(getEditProfileValidateErrors)
    const serverErrors = useSelector(getEditProfileServerErrors)
    const isLoading = useSelector(getEditProfileIsLoading)

    const onChangeUsername = (value: string) => {
        dispatch(editProfileActions.setEditProfileForm({username: value}))
    }

    const onChangeName = (value: string) => {
        dispatch(editProfileActions.setEditProfileForm({name: value}))
    }

    const onChangeBio = (value: string) => {
        dispatch(editProfileActions.setEditProfileForm({bio: value}))
    }

    const onSubmit = async () => {
        const result = await dispatch(updateProfileById())
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }

    useEffect(() => {
        dispatch(editProfileActions.initEditProfileForm(profileData))
    }, [dispatch, profileData])

    if (isLoading) {
        return (
            <div className={styles.LoginForm}>
                <AppPageLoader/>
            </div>
        )
    }

    return (
        <div className={styles.LoginForm}>
            <div className={styles.title}>
                Edit Profile
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
                value={form?.username ?? ''}
                placeholder={'Username'}
                onChange={onChangeUsername}
                hasError={validateErrors?.includes(ValidateEditProfileFormError.INCORRECT_USERNAME)}
            />
            <AppInput
                value={form?.name ?? ''}
                placeholder={'Name'}
                onChange={onChangeName}
                hasError={validateErrors?.includes(ValidateEditProfileFormError.INCORRECT_NAME)}
            />
            <AppInput
                value={form?.bio ?? ''}
                placeholder={'Bio'}
                onChange={onChangeBio}
            />
            {/*
                TODO: fix later
             */}
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <AppButton className={styles.button} onClick={onSubmit}>
                Submit
            </AppButton>
        </div>
    )
}

export default EditProfileForm