import React from 'react'
import { Container, Typography, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../routes/routesModel';


export default function ErrorPage() {
    const navigate = useNavigate();
    const theme = useTheme();
    return (
        <Container maxWidth="100vw"
            sx={{
                textAlign: 'center',
                backgroundColor: theme.palette.background.default,
                height: "100vw",
                width: "100%",
                color: "#fff",
                pt: 20,
            }}
        >
            <Typography variant="h1" component="h2" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" component="h3" gutterBottom>
                Page Not Found
            </Typography>
            <Typography variant="body1" gutterBottom>
                The page you are looking for does not exist.
            </Typography>
            <Button variant="contained" color="primary" onClick={() => navigate(ROUTES.ROOT)}>
                Go to Home
            </Button>
        </Container>
    );
}
