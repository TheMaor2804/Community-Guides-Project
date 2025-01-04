import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button, Grid2 } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error = ({ errorMessage }) => {

    const navigate = useNavigate();

    return (
        <Container
            maxWidth="100vw"
            sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                pt: 20,
            }}
        >
            <Grid2 container spacing={2}>
                <Grid2 item="true" xs={12} md={8}>
                    <Typography variant="h5">
                        {errorMessage} please try again later.
                    </Typography>
                </Grid2>
                <Grid2 item="true" xs={12} md={8}>
                    <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
                        Go back
                    </Button>
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default Error;
