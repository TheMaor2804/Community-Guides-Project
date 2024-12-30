import { Box, colors } from '@mui/material'
import React from 'react'
import NavBarItem from '../../../routes/components/NavbarItem'
import ROUTES from '../../../routes/routesModel'

export default function NotLogged() {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <NavBarItem label="Signup" typographyVariant='h6' to={ROUTES.SIGNUP} />
            &#8226;
            <NavBarItem label="Login" typographyVariant='h6' to={ROUTES.LOGIN} />
        </Box>
    )
}
