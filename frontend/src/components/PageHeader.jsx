
import { Container, Divider, Typography } from "@mui/material";


export default function PageHeader({ title, subtitle }) {

    //add theme

    return (
        <Container>
            <Typography variant="h2" component="h1" style={{ color: "#fff" }}>
                {title}
            </Typography>
            <Typography variant="h5" component="h2" style={{ color: "#fff" }}>
                {subtitle}
            </Typography>
            <Divider sx={{ my: 2 }} />
        </Container>
    );
}