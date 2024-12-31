import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useCurrentUser } from "../../users/providers/UserProvider";
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmailIcon from '@mui/icons-material/Email';

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
                <BottomNavigationAction
                    label="About"
                    icon={<InfoIcon />}
                    onClick={() => navigate(ROUTES.ABOUT)}
                />
                <BottomNavigationAction
                    label="Contact"
                    icon={<EmailIcon />}
                    onClick={() => navigate(ROUTES.CONTACT)}
                />

            </BottomNavigation>
        </Paper>
    );
}
