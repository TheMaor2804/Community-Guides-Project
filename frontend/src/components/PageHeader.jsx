import { Container, Divider, Typography, useTheme } from "@mui/material";
export default function PageHeader({ title, subtitle }) {
    const theme = useTheme();
    return (
        <Container sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 2, py: 3, }}>
            <Typography variant="h2" component="h1" style={{}}>
                {title}
            </Typography>
            <Typography variant="h5" component="h2" style={{}}>
                {subtitle}
            </Typography>
            <Divider sx={{ my: 2 }} />
        </Container>
    );
}