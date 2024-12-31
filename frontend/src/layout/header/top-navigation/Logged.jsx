import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import useUsers from '../../../users/hooks/useUsers';

export default function Logged() {
    const { handleLogout } = useUsers();
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Button color='inherit' onClick={handleLogout}
                sx={{ textTransform: "none" }}>
                <Typography variant='h6'>Logout</Typography>
            </Button>
        </Box>
    )
}
