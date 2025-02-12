import { Box, useTheme } from '@mui/material'
import React from 'react'

export default function Main({ children }) {

    const theme = useTheme();

    return (
        <Box
            sx={{
                minHeight: "100vh",
            }}
        >
            {children}
        </Box>
    )
}
