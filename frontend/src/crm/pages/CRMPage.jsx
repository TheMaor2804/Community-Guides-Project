import React from 'react'
import { useCurrentUser } from '../../users/providers/UserProvider'
import { Navigate } from 'react-router-dom'
import ROUTES from '../../routes/routesModel'
import { Container, Divider, Typography, useTheme } from '@mui/material'
import NavBarItem from '../../routes/components/NavbarItem'

export default function CRM() {

    //authentication
    const { user } = useCurrentUser()
    const theme = useTheme();

    if (!user || !user.isAdmin) return <Navigate to={ROUTES.ROOT} replace />


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
            <Typography variant="h4">CRM</Typography>
            <Divider sx={{ backgroundColor: 'white', width: '100%', my: 2 }} />
            <NavBarItem
                to={ROUTES.MANAGE_FEATURED_GUIDES}
                label="Manage Featured Guides"
                variant='contained'
            />
            <NavBarItem
                to={ROUTES.MANAGE_USERS}
                label="Manage Users"
                variant='contained'
            />
            <NavBarItem
                to={ROUTES.MANAGE_NEWS}
                label="Manage News"
                variant='contained'
            />
            <NavBarItem
                to={ROUTES.MANAGE_CATEGORIES}
                label="Manage Categories"
                variant='contained'
            />
        </Container>
    )
}
