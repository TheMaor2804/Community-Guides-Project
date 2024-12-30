import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import FormButton from "./FormButton";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import LoopIcon from "@mui/icons-material/Loop";
import { FormHelperText, Grid2 } from "@mui/material";
import Spinner from "../../components/Spinner";

const Form = ({
    title = "",
    onSubmit,
    onReset,
    validateForm,
    to = "/",
    color = "white",
    spacing = 1,
    styles = {},
    node = 'Submit',
    error,
    children,
    isLoading,
}) => {

    const navigate = useNavigate();

    const [submissionError, setSubmissionError] = useState(error?.message);

    useEffect(() => {
        if (error)
            setSubmissionError(error.message.split('Error: ').pop());
    }, [error]);

    if (isLoading) return <Spinner />;

    return (
        <Box
            component="form"
            color={color}
            sx={{ mt: 2, p: { xs: 1, sm: 2 }, ...styles }}
            onSubmit={onSubmit}
            autoComplete="off"
            noValidate
        >
            <Typography align="center" variant="h5" component="h1" mb={2}>
                {title.toUpperCase()}
            </Typography>

            <Grid2 container spacing={spacing}>
                {children}
            </Grid2>

            <Grid2 container spacing={1} my={2} direction="row" width="100">
                <Grid2 item="true" size={{ xs: 12, sm: 6 }}>
                    <FormButton
                        node="cancel"
                        color="error"
                        component="div"
                        variant="outlined"
                        onClick={() => navigate(to)}
                    />
                </Grid2>
                <Grid2 item="true" size={{ xs: 12, sm: 6 }}>
                    <FormButton
                        node={<LoopIcon />}
                        variant="outlined"
                        component="div"
                        onClick={onReset}
                    />
                </Grid2>
                <Grid2 item="true" size={{ xs: 12 }}>
                    <FormButton
                        node={node}
                        onClick={onSubmit}
                        disabled={!validateForm()}
                        size="large"
                    />
                </Grid2>
                {error && (<FormHelperText error={Boolean(error)}>{submissionError}</FormHelperText>)}

            </Grid2>
        </Box>
    );
};

export default Form;
