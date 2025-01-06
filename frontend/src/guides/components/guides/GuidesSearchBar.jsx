import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useCustomTheme } from '../../../providers/CustomThemeProvider';

export default function GuidesSearchBar() {
    const { isDark } = useCustomTheme();

    const [searchParams, setSearchParams] = useSearchParams();

    const [inputValue, setInputValue] = useState("");

    const handleChange = ({ target }) => setInputValue(target.value);

    return (
        <Box display="inline-flex">
            <FormControl variant="standard">
                <OutlinedInput
                    sx={{
                        color: isDark ? "white" : "black",
                        backgroundColor: isDark ? "#333333" : "#e3f2fd"
                    }}
                    placeholder="Search"
                    size="small"
                    value={inputValue}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                sx={{ color: isDark ? "white" : "black" }}
                                edge="end"
                                onClick={() => {
                                    setSearchParams({ q: inputValue });
                                }}
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    )
}
