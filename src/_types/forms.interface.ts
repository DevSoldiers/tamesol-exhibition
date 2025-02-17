import { FormEvent } from "react";

type HandleSubmitType = (e: FormEvent<HTMLFormElement>) => Promise<void>;

export interface IPhoneFormProps {
    handleSubmit: HandleSubmitType;
    isSendingOTP: boolean;
}

export interface IVerifyFormProps {
    handleVerifyForm: HandleSubmitType;
}