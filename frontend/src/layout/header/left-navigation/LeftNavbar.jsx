import { Box, IconButton } from '@mui/material'
import React from 'react'
import NavBarItem from '../../../routes/components/NavbarItem'
import ROUTES from '../../../routes/routesModel'
import { useCurrentUser } from '../../../users/providers/UserProvider'
import { useNavigate } from 'react-router-dom'


export default function LeftNavbar() {

    const { user } = useCurrentUser();
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'block', width: "33.33333%" }}>
            {/* <NavBarItem label={"Guides"} to={ROUTES.ROOT} /> */}
            <IconButton>
                <img src="/images/logo.jpg" alt="logo" style={{ width: "50px", height: "50px" }} onClick={() => navigate(ROUTES.ROOT)} />
            </IconButton>
            {user && user.isAdmin && <NavBarItem label={"CRM"} to={ROUTES.CRM} />}
            {user && (user.isMod || user.isAdmin) && <NavBarItem label={"Mod Page"} to={ROUTES.MOD_PAGE} />}
        </Box>
    )
}
