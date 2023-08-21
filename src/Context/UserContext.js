'use client'
import {createContext, useContext, useEffect, useState} from 'react';
import {getCurrentUser} from "@/Api/Woocommerce/woocommerce";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    useEffect(() => {
        getCurrentUser(useNamber).then(r => setUser(r))
    }, [])

    const [user, setUser] = useState({});

    const [useNamber, setUseNamber] = useState(1)


    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};
