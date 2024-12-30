import { Box } from '@mui/material'
import React from 'react'
import NavBarItem from '../../../routes/components/NavbarItem'
import ROUTES from '../../../routes/routesModel'

export default function SitesLinks() {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexGrow: 1 }}>
            <NavBarItem
                typographySx={{
                    fontFamily: 'Crimson Text',
                    fontWeight: "600",
                }}
                typographyVariant={"h3"}
                label={"Community Guides"}
                to={ROUTES.ROOT}
            />
        </Box>
    )
}
