import React from 'react'
import { Container, Typography, Box, useTheme } from '@mui/material';
import { useCustomTheme } from '../providers/CustomThemeProvider';
import PageHeader from '../components/PageHeader';

export default function ContactPage() {
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
                title="Contact Page"
                subtitle="On this page you can find contact information for the application"
            />
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: 4
                }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Contact Information
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    Phone: (123) 456-7890
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    Email: contact@example.com
                </Typography>
            </Container>
        </Container >
    )
}
