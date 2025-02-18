import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface AppState {
    phoneNumber: string;
    password: string;
    otp?: string;
    flipped?: boolean;
    images?: File | null;
}

interface AppContextType {
    state: AppState;
    setState: Dispatch<SetStateAction<AppState>>;
}

export const AppContext = createContext<AppContextType>({
    state: {
        phoneNumber: "",
        password: "",
        otp: "",
        flipped: false,
        images: null,
    },
    setState: () => { },
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<AppState>({
        phoneNumber: "",
        password: "",
        otp: "",
        flipped: false,
        images: null,
    });

    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    );
};