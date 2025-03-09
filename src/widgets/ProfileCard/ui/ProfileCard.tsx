import * as styles from './ProfileCard.module.scss';
import {User} from 'entities/User';

interface ProfileCardProps {
    profileData?: User
}

const ProfileCard = (props: ProfileCardProps) => {
    const {
        profileData
    } = props

    return (
        <div className={styles.ProfileCard}>
            <div className={styles.name}>
                {profileData?.name}
            </div>
            <div className={styles.username}>
                {'@' + (profileData?.username ?? '')}
            </div>
            <div className={styles.bio}>
                {profileData?.bio}
            </div>
        </div>
    )

}

export default ProfileCard