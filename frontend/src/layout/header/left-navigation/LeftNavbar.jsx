import { Box, Grid2, IconButton } from '@mui/material'
import React from 'react'
import NavBarItem from '../../../routes/components/NavbarItem'
import ROUTES from '../../../routes/routesModel'
import { useCurrentUser } from '../../../users/providers/UserProvider'
import { Link } from 'react-router-dom'


export default function LeftNavbar() {

    const { user } = useCurrentUser();

    return (
        <Box sx={{ width: "33.33333%" }}>
            {/* <NavBarItem label={"Guides"} to={ROUTES.ROOT} /> */}
            {user && user.isAdmin && <NavBarItem label={"CRM"} to={ROUTES.CRM} />}
            {user && (user.isMod || user.isAdmin) && <NavBarItem label={"Mod Page"} to={ROUTES.MOD_PAGE} />}
        </Box>
    )
}
