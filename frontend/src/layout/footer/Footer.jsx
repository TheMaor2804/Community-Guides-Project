import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import StyleIcon from "@mui/icons-material/Style";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useCurrentUser } from "../../users/providers/UserProvider";
import FavoriteIcon from '@mui/icons-material/Favorite';
import PortraitIcon from '@mui/icons-material/Portrait';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function Footer() {
    const navigate = useNavigate();

    const { user } = useCurrentUser();

    return (
        <Paper
            elevation={3}
            sx={{ position: "sticky", bottom: 0, left: 0, right: 0, zIndex: 1 }}
        >
            <BottomNavigation showLabels>
                <BottomNavigationAction
                    label="Home"
                    icon={<HomeIcon />}
                    onClick={() => navigate(ROUTES.ROOT)}
                />
                <BottomNavigationAction
                    label="About"
                    icon={<InfoIcon />}
                    onClick={() => navigate(ROUTES.ABOUT)}
                />
                {user ? <BottomNavigationAction
                    label="Favorites"
                    icon={<FavoriteIcon />}
                    onClick={() => navigate(ROUTES.FAV_GUIDES)}
                /> : null}

                {user ? <BottomNavigationAction
                    label="My Guides"
                    icon={<MenuBookIcon />}
                    onClick={() => navigate(ROUTES.MY_GUIDES)}
                /> : null}

            </BottomNavigation>
        </Paper>
    );
}
