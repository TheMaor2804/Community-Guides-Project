import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from "@mui/icons-material/Add";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmailIcon from '@mui/icons-material/Email';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PortraitIcon from '@mui/icons-material/Portrait';
import InfoIcon from "@mui/icons-material/Info";
import SearchIcon from "@mui/icons-material/Search";
import { useCustomTheme } from "../providers/CustomThemeProvider";
import { useTheme } from "@mui/material";


export default function AboutPage() {

    const theme = useTheme();

    const { isDark } = useCustomTheme();

    return (
        <Container
            maxWidth="100vw"
            sx={{
                pt: 20,
                backgroundColor: theme.palette.background.default,
                color: isDark ? "#fff" : "#000",
                height: "100%",
                minHeight: "100vh",
            }}>
            <PageHeader
                title="About Page"
                subtitle="On this page you can find explanations about using the application"
            />
            <Container
                sx={{
                    mt: 2,
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                <Container sx={{ flex: 1, mr: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        About
                    </Typography>
                    <Typography variant="body1" >
                        This is a simple application that allows you to create, edit, delete, and view guides. You can also add guides to your favorites and view them later. You can also register and log in to the application to save your guides and view them later. The application also allows you to switch between light and dark themes. The application is built using React, Material-UI, and React Router. The application is responsive and works on mobile devices as well as desktops.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Navigation
                    </Typography>
                    <Typography variant="body1" >
                        You can navigate to different pages using the navigation bar at the
                        top or bottom of the page. The navigation bar contains the following links:
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        <FavoriteIcon />Favorites
                    </Typography>
                    <Typography variant="body1" >
                        Clicking this link or icon will take you to the favorite guides page. <br />
                        You must be logged in to access this feature.
                        You can upvote guides to mark them as favorites for quick access.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        <MenuBookIcon /> My Guides
                    </Typography>
                    <Typography variant="body1">
                        Clicking this link or icon will take you to the my guides page. <br />
                        Here, you can view all the guides you have created.
                        You must be logged in to access this feature.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        <InfoIcon /> About
                    </Typography>
                    <Typography variant="body1" >
                        Clicking this link or icon will take you to the about page.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        <EmailIcon /> Contact
                    </Typography>
                    <Typography variant="body1" >
                        Clicking this link or icon will take you to the contact page.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        <SearchIcon /> Search
                    </Typography>
                    <Typography variant="body1" >
                        Clicking this icon will search for guides whose title includes the characters you enter in the search bar. <br />
                        Here, you can search for specific guides by entering keywords into the search bar.
                        The search functionality allows you to quickly find guides that match your criteria. It is only available on pages that display guides.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        <AddIcon /> Add Guide
                    </Typography>
                    <Typography variant="body1" >
                        Clicking this icon will take you to the add guide page. <br />
                        To add a new guide, navigate to any of the guides pages and click on the
                        green "Make A Guide +" button. This will open a form where you can enter
                        the details of the new guide you are interested in creating. Once
                        you have filled out the form, click "Submit" to add the guide to
                        your collection.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        <EditIcon /> Edit guide
                    </Typography>
                    <Typography variant="body1" >
                        Clicking this icon will take you to the edit guide page. <br />
                        To edit an existing guide, go to any of the guides pages in the navigation
                        bar and locate the guide you want to edit. Remember, you may only
                        edit guides that only you have created. Click on the "Edit" button
                        associated with that guide. This will open a form pre-filled with
                        the guide's current details. Make the necessary changes and click
                        "Submit" to update the guide.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        <DeleteIcon /> Delete guide
                    </Typography>
                    <Typography variant="body1" >
                        Clicking this icon will take you to the delete guide page. <br />
                        If you need to delete a guide, find the guide on any of the guides pages and
                        click the "Delete" button. You will be prompted to confirm the
                        deletion. Once confirmed, that guide will be permanently removed
                        from your collection and the database.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        <AppRegistrationIcon /> Register
                    </Typography>
                    <Typography variant="body1" >
                        Clicking this link will take you to the registration page. <br />
                        Once you have registered and become an active user on the site,
                        you will be able to access other features like adding guides,
                        editing guides, deleting guides, upvoting and downvoting guides.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        <LoginIcon /> Login
                    </Typography>
                    <Typography variant="body1" >
                        Clicking this link will take you to the login page. <br />
                        To access certain features like managing favorites or your guides,
                        you need to be logged in. Use the login form to enter your
                        credentials.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        <LogoutIcon /> Logout
                    </Typography>
                    <Typography variant="body1" >
                        Clicking this link will log you out of the application.
                    </Typography>
                    <Divider />
                    <Typography variant="h5" gutterBottom>
                        Theme
                    </Typography>
                    <Typography variant="body1" >
                        You can switch between light and dark themes by clicking on the
                        theme switch in the navigation bar.
                    </Typography>
                </Container>
            </Container>
        </Container>
    );
}
