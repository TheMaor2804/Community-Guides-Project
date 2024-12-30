import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/system";
import { useTheme } from "@mui/material";

const Spinner = ({ color = "primary", size = 40 }) => {


    return (
        <Container
            maxWidth="100vw"
            sx={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
            }}
        >
            <CircularProgress
                color={color}
                size={size}
                sx={{ alignSelf: "center" }}
            />
        </Container>
    );
};

export default Spinner;
