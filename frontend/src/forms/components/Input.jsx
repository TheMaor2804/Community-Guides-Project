import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Grid2 } from "@mui/material";
import { makeFirstLetterCapital } from "../../utils/algoMethods";
import { useCustomTheme } from "../../providers/CustomThemeProvider";

const Input = ({
    variant = "outlined",
    type = "text",
    name,
    data,
    label,
    required = true,
    error,
    onChange,
    ...rest
}) => {

    const { isDark } = useCustomTheme();

    return (
        <Grid2 item="true" size={{ xs: 12 }} {...rest}>
            <TextField
                variant={variant}
                label={makeFirstLetterCapital(label)}
                type={type}
                id={name}
                name={name}
                value={data[name] ? data[name] : ""}
                required={required}
                helperText={error}
                error={Boolean(error)}
                onChange={onChange}
                fullWidth
                autoComplete="off"
                slotProps={{
                    inputLabel: { shrink: true, },
                }}
                sx={{ input: { color: isDark ? 'white' : 'black' } }}
            />
        </Grid2>
    );
};

export default Input;
