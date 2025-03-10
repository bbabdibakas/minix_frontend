import {editProfileReducer} from './model/slice/editProfileSlice';
import {EditProfileState} from './model/types/EditProfileState';
import EditProfileModal from './ui/EditProfileModal/EditProfileModal';

export type {
    EditProfileState
}

export {
    editProfileReducer,
    EditProfileModal
}