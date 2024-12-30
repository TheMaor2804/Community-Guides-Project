import { colors, createTheme, ThemeProvider } from '@mui/material'
import React, { createContext, useCallback, useContext, useState } from 'react'

const ThemeContext = createContext();

export default function CustomThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);

    const toggleDarkMode = useCallback(() => {
        setIsDark((prev) => !prev);
    }, [])

    const theme = createTheme({
        status: {
            danger: colors.red[500],
        },
        typography: {
            fontFamily: [
                'Arial',
                'Roboto',
                'sans-serif',
            ].join(','),
        },
        palette: {
            primary: {
                main: "#f44336"
            },
            secondary: {
                main: "#00e676"
            },
            error: {
                main: colors.red[600]
            },
            background: {
                default: isDark ? colors.grey[900] : colors.grey[100],
                paper: isDark ? "#424242D9" : colors.grey[200],
                secondary: isDark ? colors.grey[700] : colors.grey[300],
                header: isDark ? "#343636BF" : "#343636BF",
            },
        },
        typography: {
            h1: {
                color: '#000', // apply primary color to h1 
            },
            h2: {
                color: '#000', // apply primary color to h2
            },
            h3: {
                color: '#000',
            },
            h4: {
                color: '#000',
            },
            h5: {
                color: '#000',
            },
            body1: {
                color: '#222',
            },
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    )

}
export const useCustomTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useCustomTheme must be used within a CustomThemeProvider')
    }
    return context;
};
