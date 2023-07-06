import React, { createContext, useContext, useState } from "react";
import { GlobalContextI } from "./type";

const GlobalContext = createContext<GlobalContextI>({
    setBodyStructure: () => null,
    bodyStructure: false
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [bodyStructure, setBodyStructure] = useState<boolean>(false)
    return (
        <GlobalContext.Provider
            value={{
                bodyStructure,
                setBodyStructure,
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