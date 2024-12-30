import React, { useState } from 'react'
import Logged from './Logged'
import NotLogged from './NotLogged'
import { Box, Button, Grid2 } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../../../users/providers/UserProvider';

export default function RightNavbar() {


    const navigate = useNavigate()

    return (
        <Box sx={{ display: "flex", width: "33.33333%", justifyContent: "flex-end" }}>
            <Button
                variant='contained'
                color='success'
                size='small'
                onClick={() => navigate('/create-guide')}
            // endIcon={<AddIcon />}
            >
                Create a Guide
            </Button>
        </Box>
    )
}
