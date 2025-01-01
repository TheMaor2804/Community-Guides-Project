import { Box, Container, Grid2, Typography, useTheme } from '@mui/material';
import React, { useCallback } from 'react';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CreateIcon from '@mui/icons-material/Create';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import { useLocation, useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModel';
import { handleLongText } from '../../../utils/algoMethods';
export default function GuideComponent({ guide }) {

    const navigate = useNavigate();
    const location = useLocation();

    const theme = useTheme();

    return (
        <Grid2 item="true" size={{ xs: 12, sm: 4 }} sx={{ minHeight: 120, height: "auto", flexGrow: 1 }}>
            <Container
                onClick={
                    () => navigate(ROUTES.GUIDE + "/" + guide._id,
                        {
                            state: { from: location.pathname !== ROUTES.LOGIN && location.pathname !== ROUTES.SIGNUP ? location.pathname : location.state?.from }
                        }
                    )
                }
                sx={{
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    py: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 1,
                    ":hover": { cursor: "pointer", backgroundColor: theme.palette.action.hover }
                }}
            >
                <Typography variant="h5"
                    sx={{
                        wordBreak: "break-word",
                    }}>
                    {handleLongText(guide?.title, 50)}
                </Typography>
                <br />
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        alignItems: "center",
                        justifyContent: "space-between",
                        mt: "auto",
                    }}
                >
                    <Typography variant="h5"
                        sx={{
                            fontSize: "0.8rem",
                            display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        }}>
                        <AccessTimeIcon sx={{ width: "0.9rem", height: "0.9rem" }} />
                        {new Date(guide.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })},
                        <CreateIcon sx={{ width: "0.9rem", height: "0.9rem" }} /> {handleLongText(guide?.author, 19 - String(guide.upvotes - guide.downvotes).length)}
                    </Typography>
                    <Typography variant="h5"
                        sx={{
                            fontSize: "0.8rem", display: "flex", alignItems: "center", justifyContent: "center", gap: 1
                        }}>
                        {(guide.upvotes.length - guide.downvotes.length).toLocaleString()}
                        <ThumbsUpDownIcon sx={{ width: "0.9rem", height: "0.9rem" }} />
                    </Typography>
                </Box>
            </Container>
        </Grid2>
    )
}
