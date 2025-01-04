import { Container, useTheme } from '@mui/material'
import React from 'react'

export default function FavGuidesPage() {
    const theme = useTheme();
    return (
        <Container
            maxWidth="100%"
            sx={{
                display: 'flex',
                flexDirection: "column",
                gap: 2,
                height: "100%",
                minHeight: "100vh",
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                pt: 20,
                backgroundImage: 'url(/images/userBG.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

        </Container>
    )
}
