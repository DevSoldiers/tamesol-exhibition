"use client";

import { AppProvider } from "@/lib/context/userform.context";
import RegisterUserForm from "./RegisterUser.form";

const MainRegisterForm = () => {
    return (
        <AppProvider>
            <RegisterUserForm />
        </AppProvider>
    );
};

export default MainRegisterForm;
