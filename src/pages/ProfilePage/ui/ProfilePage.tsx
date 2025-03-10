import {useAppDispatch} from 'shared/lib/useAppDispatch/useAppDispatch';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {AppPageLoader} from 'shared/ui/AppPageLoader/AppPageLoader';
import {ProfileCard} from 'widgets/ProfileCard';
import {useParams} from 'react-router';
import {fetchProfileByUsername, getProfileData, getProfileIsLoading, getProfileServerErrors} from 'entities/Profile';
import {AppButton, AppButtonTheme} from 'shared/ui/AppButton/AppButton';
import {EditProfileModal} from 'features/EditProfile';

const ProfilePage = () => {
    const {username} = useParams<{ username: string }>();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const profileData = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const serverErrors = useSelector(getProfileServerErrors)

    const onModalOpen = () => {
        setIsModalOpen(true);
    }

    const onModalClose = () => {
        setIsModalOpen(false);
    }

    if (!username) {
        return null
    }

    useEffect(() => {
        void dispatch(fetchProfileByUsername(username))
    }, [dispatch, username])

    let content

    if (isLoading) {
        content = (
            <div className="page">
                <AppPageLoader/>
            </div>
        )
    } else if (serverErrors) {
        content = (
            <div className="page">
                serverErrors
            </div>
        )
    } else {
        content = (
            <div className="page">
                <ProfileCard profileData={profileData}/>
                <AppButton theme={AppButtonTheme.OUTLINED} onClick={onModalOpen}>
                    Edit Profile
                </AppButton>
                {isModalOpen && profileData ? (
                    <EditProfileModal isOpen={isModalOpen} onClose={onModalClose} profileData={profileData}/>
                ) : null}
            </div>
        )
    }

    return content
}

export default ProfilePage