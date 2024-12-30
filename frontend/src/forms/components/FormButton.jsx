import React from "react";
import Button from "@mui/material/Button";
import { FormControl, FormHelperText } from "@mui/material";

const FormButton = ({
    variant = "contained",
    component = "button",
    size = "medium",
    color = "primary",
    onClick,
    disabled = false,
    error,
    node,
}) => {
    return (
        <FormControl sx={{ width: "100%" }}>
            <Button
                variant={variant}
                component={component}
                size={size}
                color={color}
                onClick={onClick}
                disabled={disabled}
                fullWidth
            >
                {node}
            </Button>
            <FormHelperText error={Boolean(error)}>{error}</FormHelperText>
        </FormControl>
    );
};

export default FormButton;
