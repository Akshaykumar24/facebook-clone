
import { createContext, useState } from "react";
export const UserDataContext = createContext();


export const UserDataContextProvider = ({ children }) => {
    const [userDataContext, setUserDataContext] = useState({});


    const handleUserDataContext = (par) => {
        setUserDataContext(par);
    }

    return <UserDataContext.Provider value={{ handleUserDataContext, userDataContext }}>{children}</UserDataContext.Provider>
}