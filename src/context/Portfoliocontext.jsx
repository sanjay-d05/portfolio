import { createContext, useState } from "react";

export const PortfolioContext = createContext() ;

const PortfolioProvider = ({children}) => {

    const [load , setLoad] = useState(true) ;

    const value = {
        load ,setLoad
    }

    return(
        <PortfolioContext.Provider value={value}>
            {children}
        </PortfolioContext.Provider>
    )
} ;

export default PortfolioProvider ;