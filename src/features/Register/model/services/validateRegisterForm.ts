import {RegisterForm, ValidateRegisterFormError} from "../../model/types/RegisterState";

export const validateRegisterForm = (form: RegisterForm) => {
    const {
        name, username, password,
    } = form;

    const errors: ValidateRegisterFormError[] = [];

    if (name.trim().length <= 2) {
        errors.push(ValidateRegisterFormError.INCORRECT_NAME);
    }

    if (username.trim().length <= 2) {
        errors.push(ValidateRegisterFormError.INCORRECT_USERNAME);
    }

    if (password.trim().length <= 8) {
        errors.push(ValidateRegisterFormError.INCORRECT_PASSWORD);
    }

    return errors;
}