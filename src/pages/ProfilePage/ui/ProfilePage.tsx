import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {AppPageLoader} from "shared/ui/AppPageLoader/AppPageLoader";
import {ProfileCard} from "widgets/ProfileCard";
import {useParams} from "react-router";
import {fetchProfileByUsername, getProfileData, getProfileIsLoading, getProfileServerErrors} from "entities/Profile";

const ProfilePage = () => {
    const {username} = useParams<{ username: string }>();

    if (!username) {
        return null
    }

    const dispatch = useAppDispatch();

    const profileData = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const serverErrors = useSelector(getProfileServerErrors)

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
            </div>
        )
    }

    return content
}

export default ProfilePage