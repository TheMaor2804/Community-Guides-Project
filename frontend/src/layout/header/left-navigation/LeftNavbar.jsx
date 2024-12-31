import { Box, IconButton, useMediaQuery } from '@mui/material'
import React from 'react'
import NavBarItem from '../../../routes/components/NavbarItem'
import ROUTES from '../../../routes/routesModel'
import { useCurrentUser } from '../../../users/providers/UserProvider'
import { useNavigate } from 'react-router-dom'


export default function LeftNavbar() {

    const isSM = useMediaQuery('(max-width:600px)');
    const { user } = useCurrentUser();
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', justifyContent: "flex-start", alignItems: "center", width: "33.33333%" }}>
            <IconButton onClick={() => navigate(ROUTES.ROOT)}>
                <img src="/images/logo.jpg" alt="logo" style={{ width: "50px", height: "50px" }} />
            </IconButton>
            {isSM ? null : user && user.isAdmin && <NavBarItem label={"CRM"} to={ROUTES.CRM} />}
            {isSM ? null : user && (user.isMod || user.isAdmin) && <NavBarItem label={"Mod Page"} to={ROUTES.MOD_PAGE} />}
        </Box>
    )
}
