import { colors, createTheme, ThemeProvider, useMediaQuery } from '@mui/material'
import React, { createContext, useCallback, useContext, useState } from 'react'

const ThemeContext = createContext();

export default function CustomThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);

    const toggleDarkMode = useCallback(() => {
        setIsDark((prev) => !prev);
    }, [])

    const isSM = useMediaQuery('(max-width:600px)');

    const theme = createTheme({
        status: {
            danger: colors.red[500],
        },
        palette: {
            primary: {
                main: isDark ? "#aa2e25" : "#f44336"
            },
            secondary: {
                main: isDark ? "#00a152" : "#00e676"
            },
            error: {
                main: isDark ? colors.red[800] : colors.red[400]
            },
            success: {
                main: isDark ? colors.green[800] : colors.green[400]
            },
            background: {
                default: isDark ? colors.grey[900] : colors.grey[100],
                paper: isDark ? "#424242D9" : colors.grey[200],
                secondary: isDark ? colors.grey[700] : colors.grey[300],
                header: isDark ? "#343636BF" : "#bdbdbdBF",
            },
            action: {
                disabledBackground: isDark ? colors.grey[800] : colors.grey[300],
                disabled: isDark ? colors.grey[400] : colors.grey[600],
            }
        },
        typography: {
            fontFamily: [
                'Roboto',
                'Arial',
                'sans-serif',
            ].join(','),
            h1: {
                color: isDark ? '#fff' : '#000',
                fontSize: isSM ? "2rem" : "2.5rem",
            },
            h2: {
                color: isDark ? '#fff' : '#000',
                fontSize: isSM ? "1.75rem" : "2rem",
            },
            h3: {
                color: isDark ? '#fff' : '#000',
                fontSize: isSM ? "1.5rem" : "1.75rem",
            },
            h4: {
                color: isDark ? '#fff' : '#000',
                fontSize: isSM ? "1.25rem" : "1.5rem",
            },
            h5: {
                color: isDark ? '#fff' : '#000',
                fontSize: isSM ? "1rem" : "1.25rem",
            },
            h6: {
                color: isDark ? '#fff' : '#000',
                fontSize: isSM ? "0.875rem" : "1rem",
            },
            body1: {
                color: isDark ? '#ddd' : '#222',
                fontSize: isSM ? "0.875rem" : "1rem",
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
