import { Container, Divider, Typography } from "@mui/material";
export default function PageHeader({ title, subtitle }) {

    return (
        <Container >
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