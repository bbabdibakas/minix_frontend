import {ProfileState} from './model/types/ProfileState';
import {profileActions, profileReducer} from './model/slice/profileSlice';
import {getProfileData} from './model/selectors/getProfileData';
import {getProfileIsLoading} from './model/selectors/getProfileIsLoading';
import {getProfileServerErrors} from './model/selectors/getProfileServerErrors';
import {fetchProfileByUsername} from './model/services/fetchProfileByUsername';

export type {
    ProfileState
}

export {
    profileActions,
    profileReducer,
    getProfileData,
    getProfileIsLoading,
    getProfileServerErrors,
    fetchProfileByUsername
}