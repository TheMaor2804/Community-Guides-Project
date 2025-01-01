import React, { useEffect } from 'react'
import Guides from '../components/Guides';
import useGuides from '../hooks/useGuides';
import { Container, useTheme } from '@mui/material';
import { useCustomTheme } from '../../providers/CustomThemeProvider';

export default function GuidesPage({ category }) {
    const { guides, error, isLoading, getAllGuides } = useGuides()

    const { isDark } = useCustomTheme();

    useEffect(() => {
        getAllGuides();
    }, [])

    const theme = useTheme();

    return (
        <Container maxWidth="100vw"
            sx={{
                pt: 20,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                minHeight: "100vh",
                width: "100%",
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Guides
                guides={guides}
                isLoading={isLoading}
                error={error}
            />
        </Container>
    )
}
