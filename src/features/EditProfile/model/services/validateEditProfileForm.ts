import {User} from 'entities/User';
import {ValidateEditProfileFormError} from '../types/EditProfileState';

export const validateEditProfileForm = (form?: User) => {
    if (!form) {
        return [ValidateEditProfileFormError.NO_DATA];
    }

    const {
        name, username, bio,
    } = form;

    const errors: ValidateEditProfileFormError[] = [];

    if (!name || name.trim().length <= 3) {
        errors.push(ValidateEditProfileFormError.INCORRECT_NAME);
    }

    if (!username || username.trim().length <= 3) {
        errors.push(ValidateEditProfileFormError.INCORRECT_USERNAME);
    }

    if (bio && bio.trim().length > 32) {
        errors.push(ValidateEditProfileFormError.INCORRECT_BIO);
    }

    return errors;
}