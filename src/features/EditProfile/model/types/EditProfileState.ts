import {User} from 'entities/User';

export enum ValidateEditProfileFormError {
    INCORRECT_NAME = 'Name must be more than 2 characters.',
    INCORRECT_USERNAME = 'Username must be more than 2 characters.',
    INCORRECT_BIO = 'Bio must be less than 32 characters.',
    NO_DATA = 'At least one field is required',
}

export interface EditProfileState {
    form?: User
    isLoading: boolean;
    serverError?: string[];
    validateErrors?: ValidateEditProfileFormError[]
} 
