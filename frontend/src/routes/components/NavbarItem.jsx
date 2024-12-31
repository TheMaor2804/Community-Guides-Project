import React from "react";
import NavBarLink from "./NavbarLink";
import { Button, Typography } from "@mui/material";

export default function NavBarItem({
    to,
    sx,
    typographySx,
    typographyVariant = "h5",
    label,
    variant = "text"
}) {

    return (
        <NavBarLink to={to} sx={sx}>
            <Button color="inherit" variant={variant}
                sx={{ textTransform: "none" }}
            >
                <Typography
                    variant={typographyVariant}
                    sx={typographySx}
                >
                    {label}
                </Typography>
            </Button>
        </NavBarLink>
    );
}
