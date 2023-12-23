"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import IntelliAI from "@/utils/IntelliAI";



const AppContext = createContext<ContextProviderValue | undefined>(undefined);

export const ContextProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    const [response, setResponse] = useState<any>(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [courseContent, setCourseContent] = useState({
        subject: '',
        duration: '',
        level: '',
    });

    const getResponse = async (prompt) => {
        try {
            setLoading(true);
            const query = { prompt }
            const result = await IntelliAI(query);
            console.log(result)
            if (result.success) {
                setResponse(result.response);
                setLoading(false);
                setError(null)
            }
            else {
                setError(result.response);
                setLoading(false);
            }
        } catch (error) {
            setError(`${error}`);
            setLoading(false);
        }
    };

    const setCourseContentInfo = (subject, duration, level) => {
        setCourseContent({
            subject,
            duration,
            level,
        });
    };

    const emptyResponse = () => {
        setResponse(null);
    };

    const value = {
        toggle,
        setToggle,
        loading,
        setLoading,
        response,
        setResponse,
        getResponse,
        emptyResponse,
        error,
        setCourseContentInfo,
        courseContent,
        setError
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useWebContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useWebContext must be used within an AppContext");
    }

    return context;
};
