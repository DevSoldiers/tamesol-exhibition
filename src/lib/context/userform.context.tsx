import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface AppState {
    phoneNumber: string;
    password: string;
    otp?: string;
    flipped?: boolean;
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
    },
    setState: () => { },
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<AppState>({
        phoneNumber: "", password: "", otp: "", flipped: false
    });

    return (
        <AppContext.Provider value={{ state, setState }
        }>
            {children}
        </AppContext.Provider>
    );
};