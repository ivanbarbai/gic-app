'use client';
import { createContext, useEffect } from "react";
import { useWidth } from "../hooks/useWidth";

export const BreakpointContext = createContext();

export const BreakpointProvider = ({children}) => {
    const width = useWidth();
    const breakpoint = 1024;

    return(
        <BreakpointContext.Provider value={{width, breakpoint}}>
            {children}
        </BreakpointContext.Provider>
    )
}
