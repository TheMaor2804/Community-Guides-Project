import { Container, Typography, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import useGuides from '../../guides/hooks/useGuides';
import Guides from '../../guides/components/Guides';
import { useCurrentUser } from '../../users/providers/UserProvider';
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

export default function ManageFeaturedGuidesPage() {

    const { guides, guidesError, guidesIsLoading, getAllApprovedGuides } = useGuides()

    const { user } = useCurrentUser()
    if (!user || !user.isAdmin) return <Navigate to={ROUTES.ROOT} replace />

    useEffect(() => {
        getAllApprovedGuides();
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
                borderRadius: "10px 10px 0 0",
            }}>
                <Typography variant="h4" mb={2}>Current Featured Guides</Typography>
                <Guides
                    guides={guides.filter(guide => guide.isFeatured)}
                    isLoading={guidesIsLoading}
                    error={guidesError}
                />
            </Container>
            <Container sx={{
                backgroundColor: theme.palette.background.paper,
                py: 2,
                borderRadius: "0 0 10px 10px",
            }}>
                <Typography variant="h4" mb={2}>All Guides</Typography>
                <Guides
                    guides={guides}
                    isLoading={guidesIsLoading}
                    error={guidesError}
                />
            </Container>
        </Container>
    )
}
