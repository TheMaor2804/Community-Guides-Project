import React, { useState } from 'react'
import Logged from '../top-navigation/Logged'
import NotLogged from '../top-navigation/NotLogged'
import { Box, Button, Grid2, Typography, useMediaQuery } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from '../../../users/providers/UserProvider';
import MoreButton from './MoreButton';

export default function RightNavbar() {

    const isSM = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate()

    return (
        <Box sx={{ display: "flex", width: "33.33333%", justifyContent: "flex-end" }}>
            {isSM ? <MoreButton /> : <Button
                variant='contained'
                color='success'
                size='small'
                onClick={() => navigate('/create-guide')}
                endIcon={<AddIcon sx={{ fontSize: 10 }} />}
            >
                <Typography variant='h6'>Create a Guide</Typography>
            </Button>}
        </Box>
    )
}
