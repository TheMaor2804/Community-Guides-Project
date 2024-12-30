import React, { useState } from 'react'
import { TextField, Button, InputAdornment, Grid2 } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { makeFirstLetterCapital } from '../../utils/algoMethods';

export default function FormImage({
    variant = "outlined",
    name,
    data,
    label,
    required = true,
    error,
    onChange,
    ...rest
}) {

    return (
        <Grid2 item="true" size={{ xs: 12 }} {...rest}>
            <TextField
                variant={variant}
                label={makeFirstLetterCapital(label)}
                type="file"
                id={name}
                name={name}
                files={data[name] ? data[name] : null}
                required
                onChange={onChange}
                fullWidth
                helperText={error}
                error={Boolean(error)}
                slotProps={{ inputLabel: { shrink: true, } }}
            />
        </Grid2>
    )
}
