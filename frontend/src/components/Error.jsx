import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button, Grid2 } from "@mui/material";

const Error = ({ errorMessage }) => {

    return (
        <Container
            maxWidth="100vw"
            sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
            }}
        >
            <Grid2 container spacing={2}>
                <Grid2 item="true" xs={12} md={8}>
                    <Typography variant="h5">
                        {errorMessage} please try again later.
                    </Typography>
                </Grid2>
                {/* <Grid2 item="true" xs={12} md={4} justifyContent="center">
                    <img
                        width="100%"
                        src="/images/broken-robot-error.png"
                        alt="broken robot"
                    />
                </Grid2> */}
                <Grid2 item="true" xs={12} md={8}>
                    <Button variant="contained" color="primary">
                        Go back
                    </Button>
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default Error;
