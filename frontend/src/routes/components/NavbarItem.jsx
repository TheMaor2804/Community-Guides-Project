import React from "react";
import NavBarLink from "./NavbarLink";
import { Button, Typography } from "@mui/material";

export default function NavBarItem({
    to,
    sx,
    typographySx,
    typographyVariant = "h6",
    typographyColor = "primary",
    label,
    variant = "text"
}) {

    return (
        <NavBarLink to={to} sx={sx}>
            <Button color="inherit" variant={variant}
                sx={{ textTransform: "none" }}
            >
                <Typography
                    color={typographyColor}
                    variant={typographyVariant}
                    sx={typographySx}
                >
                    {label}
                </Typography>
            </Button>
        </NavBarLink>
    );
}
