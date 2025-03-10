import {AppModal} from 'shared/ui/AppModal/AppModal';
import EditProfileForm from '../EditProfileForm/EditProfileForm';
import {User} from 'entities/User';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    profileData: User
}

const EditProfileModal = (props: LoginModalProps) => {
    const {
        isOpen,
        onClose,
        profileData
    } = props

    return (
        <AppModal isOpen={isOpen} onClose={onClose}>
            <EditProfileForm onSuccess={onClose} profileData={profileData} />
        </AppModal>
    )
}

export default EditProfileModal