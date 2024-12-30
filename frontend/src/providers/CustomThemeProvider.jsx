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
                main: isDark ? "#aa2e25" : "#f44336"
            },
            secondary: {
                main: isDark ? "#00a152" : "#00e676"
            },
            error: {
                main: colors.red[600]
            },
            background: {
                default: isDark ? colors.grey[900] : colors.grey[100],
                paper: isDark ? "#424242D9" : colors.grey[200],
                secondary: isDark ? colors.grey[700] : colors.grey[300],
                header: isDark ? "#343636BF" : colors.grey[400],
            },
        },
        typography: {
            h1: {
                color: isDark ? '#fff' : '#000', // apply primary color to h1 
            },
            h2: {
                color: isDark ? '#fff' : '#000', // apply primary color to h2
            },
            h3: {
                color: isDark ? '#fff' : '#000',
            },
            h4: {
                color: isDark ? '#fff' : '#000',
            },
            h5: {
                color: isDark ? '#fff' : '#000',
            },
            body1: {
                color: isDark ? '#ddd' : '#222',
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
