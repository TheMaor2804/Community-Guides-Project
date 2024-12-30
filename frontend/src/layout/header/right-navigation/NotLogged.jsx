import { Box } from '@mui/material'
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
            <NavBarItem label="Signup" to={ROUTES.SIGNUP} />
            &#8226;
            <NavBarItem label="Login" to={ROUTES.LOGIN} />
        </Box>
    )
}
