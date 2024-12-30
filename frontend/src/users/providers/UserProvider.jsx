import React, { createContext, useContext, useEffect, useState } from 'react'
import { getTokenFromCookies, getUserFromToken } from '../services/cookiesService';

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState(getUserFromToken());
    const [token, setToken] = useState(getTokenFromCookies());

    useEffect(() => {
        if (!user) {
            const userFromLocalStorage = getUserFromToken();
            setUser(userFromLocalStorage);
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </UserContext.Provider>
    );
}

export const useCurrentUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useCurrentUser must be used within a UserProvider');
    }
    return context;
};

