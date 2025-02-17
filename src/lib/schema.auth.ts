import * as Yup from 'yup';

export const phoneFormSchema = Yup.object({
    phoneNumber: Yup.string()
        .required('Phone number is required.')
        .matches(/^\d{10}$/, 'Phone number must be 10 digits.'),
    password: Yup.string()
        .required('Password is required.')
        .length(4, 'Password must be 4 characters long.'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required.')
        .oneOf([Yup.ref('password')], 'Passwords must match.'),
});

export const otpFormSchema = Yup.object().shape({
    otp0: Yup.string()
        .required('Required')
        .matches(/^\d$/, 'Must be a number'),
    otp1: Yup.string()
        .required('Required')
        .matches(/^\d$/, 'Must be a number'),
    otp2: Yup.string()
        .required('Required')
        .matches(/^\d$/, 'Must be a number'),
    otp3: Yup.string()
        .required('Required')
        .matches(/^\d$/, 'Must be a number'),
});