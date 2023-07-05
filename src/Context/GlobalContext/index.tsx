import React, { createContext, useContext, useState } from "react";
import { GlobalContextI } from "./type";

const GlobalContext = createContext<GlobalContextI>({
    setValue: () => null,
    value: 0
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [value, setValue] = useState<number>(5);
    return (
        <GlobalContext.Provider
            value={{
                setValue,
                value
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default function useGlobalContext(): GlobalContextI {
    const context = useContext(GlobalContext);
    if (!context) {
        new Error("Erro no acesso ao contexto global");
    }
    return context;
}