import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper, Switch, useMediaQuery } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useCurrentUser } from "../../users/providers/UserProvider";
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmailIcon from '@mui/icons-material/Email';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from 'react';
import { useCustomTheme } from "../../providers/CustomThemeProvider";

export default function Footer() {
    const navigate = useNavigate();

    const { isDark, toggleDarkMode } = useCustomTheme();

    const { user } = useCurrentUser();

    const isSM = useMediaQuery('(max-width: 600px)');

    return (
        <Paper
            elevation={3}
            sx={{
                flexWrap: "wrap", position: "sticky", bottom: 0, left: 0, right: 0, zIndex: 1
            }}
        >
            <BottomNavigation showLabels>
                {user &&
                    <BottomNavigationAction
                        label="Favorites"
                        icon={<FavoriteIcon sx={{ fontSize: 30 }} />}
                        sx={{
                            color: isDark ? 'white' : 'black',
                        }}
                        onClick={() => navigate(ROUTES.FAV_GUIDES)} />
                }

                {user &&
                    <BottomNavigationAction
                        label="My Guides"
                        icon={<MenuBookIcon
                            sx={{ fontSize: 30 }} />}
                        sx={{
                            color: isDark ? 'white' : 'black',
                        }}
                        onClick={() => navigate(ROUTES.MY_GUIDES)} />
                }
                {!isSM && <BottomNavigationAction
                    label="About"
                    icon={<InfoIcon sx={{ fontSize: 30 }} />}
                    sx={{
                        color: isDark ? 'white' : 'black',
                    }}
                    onClick={() => navigate(ROUTES.ABOUT)} />}
                {!isSM && <BottomNavigationAction
                    label="Contact"
                    icon={<EmailIcon sx={{ fontSize: 30 }} />}
                    sx={{
                        color: isDark ? 'white' : 'black',
                    }}
                    onClick={() => navigate(ROUTES.CONTACT)}
                />}
                <BottomNavigationAction
                    label={"Switch To " + (isDark ? "Light" : "Dark") + " Mode"}
                    icon={isDark ? <LightModeIcon /> : <DarkModeIcon />}
                    sx={{
                        color: isDark ? 'white' : 'black',
                    }}
                    onClick={toggleDarkMode}
                />
            </BottomNavigation>


        </Paper>
    );
}
