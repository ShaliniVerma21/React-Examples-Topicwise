/*
Nested Contexts
This example demonstrates how to use multiple contexts in a single application.
*/
import React, { createContext, useContext, useState } from 'react';

// Create a ThemeContext
const ThemeContext = createContext('light');

// Create an AuthContext
const AuthContext = createContext();

export const UseContext5 = ({ children }) => {
    return (
        <ThemeContext.Provider value="dark">
            {children}
        </ThemeContext.Provider>
    );
};

export const AuthProvider = ({ children }) => {
    const [user, setUser ] = useState(null);

    const login = (userData) => {
        setUser (userData);
    };

    const logout = () => {
        setUser (null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
export const useAuth = () => useContext(AuthContext);