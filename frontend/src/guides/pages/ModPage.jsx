import { Container, Divider, Typography, useTheme } from '@mui/material';
import React, { useEffect } from 'react'
import useGuides from '../hooks/useGuides';
import Guides from '../components/Guides';

export default function ModPage() {
    const { guides, guidesError, guidesIsLoading, getAllUnapprovedGuides } = useGuides()

    useEffect(() => {
        getAllUnapprovedGuides();
    }, []);

    const theme = useTheme();

    return (
        <Container
            maxWidth="100%"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%',
                height: '100%',
                minHeight: '100vh',
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                gap: 2,
                pt: 20,
            }}
        >
            <Container sx={{
                backgroundColor: theme.palette.background.paper,
                py: 2,
                borderRadius: "0 0 10px 10px",
            }}>
                <Typography variant="h4">Unapproved guides</Typography>
                <Divider sx={{ backgroundColor: 'white', width: '100%', my: 2 }} />
                <Guides
                    guides={guides}
                    isLoading={guidesIsLoading}
                    error={guidesError}
                />
            </Container>
        </Container>
    )
}
