import { AppBar, Box, Container, Toolbar, Typography, useTheme } from '@mui/material'
import React from 'react'
import LeftNavbar from './left-navigation/LeftNavbar'
import RightNavbar from './right-navigation/RightNavbar'
import MiddleNavbar from './middle-navigation/MiddleNavbar'
import Logged from './right-navigation/Logged'
import NotLogged from './right-navigation/NotLogged'
import { useCurrentUser } from '../../users/providers/UserProvider'
import NavBarItem from '../../routes/components/NavbarItem'
import ROUTES from '../../routes/routesModel'

export default function Header() {

    const theme = useTheme();
    const { user } = useCurrentUser();

    return (
        <AppBar
            position="fixed"
            elevation={10}
            sx={{
                backgroundColor: theme.palette.background.header,
            }}
        >
            <Container
                maxWidth="100vw"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "40px",
                    backgroundColor: "#000",
                }}
            >
                {user ? <Logged /> : <NotLogged />}
            </Container>
            <Toolbar sx={{
                height: "100px",
            }}>
                <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center", width: "100%" }}>
                    <LeftNavbar />
                    <MiddleNavbar />
                    <RightNavbar />
                </Box>
            </Toolbar>
        </AppBar>
    )
}