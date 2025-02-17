"use client";

import { useFormik } from "formik";
import { otpFormSchema } from "@/lib/schema.auth";
import { IVerifyFormProps } from "@/_types/forms.interface";

export const VerifyForm: React.FC<IVerifyFormProps> = ({ handleVerifyForm }) => {
    const formik = useFormik({
        initialValues: {
            otp0: '',
            otp1: '',
            otp2: '',
            otp3: '',
        },
        validationSchema: otpFormSchema,
        onSubmit: (values) => {
            const otp = Object.values(values).join('');
            handleVerifyForm({
                preventDefault: () => { },
                currentTarget: { otp },
            } as unknown as React.FormEvent<HTMLFormElement>);
        },
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const input = e.target;
        const nextInput = document.getElementById(`otp${index + 1}`) as HTMLInputElement;
        const prevInput = document.getElementById(`otp${index - 1}`) as HTMLInputElement;

        if (input.value.length === 1 && !isNaN(Number(input.value)) && nextInput) {
            nextInput.focus();
        } else if (input.value.length === 0 && prevInput) {
            prevInput.focus();
        }

        formik.handleChange(e);
    };

    return (
        <></>
    );
};