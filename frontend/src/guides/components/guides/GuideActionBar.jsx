import React, { useCallback, useEffect, useState } from 'react'
import { useCurrentUser } from '../../../users/providers/UserProvider'
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, CardActions, IconButton, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ROUTES from '../../../routes/routesModel';
import { useCustomTheme } from '../../../providers/CustomThemeProvider';

export default function GuideActionBar({ guideId, upvotes, downvotes, handleUpvote, handleDownvote }) {

    const { isDark } = useCustomTheme();

    const { user } = useCurrentUser();

    const [isUpvoted, setIsUpvoted] = useState(upvotes?.includes(user?._id));
    const [isDownvoted, setIsDownvoted] = useState(downvotes?.includes(user?._id));

    const [upvoteAmount, setUpvoteAmount] = useState(upvotes?.length);
    const [downvoteAmount, setDownvoteAmount] = useState(downvotes?.length);

    const [ratioColor, setRatioColor] = useState(isDark ? "white" : "black");

    const navigate = useNavigate();
    const location = useLocation();

    const noUserReroute = useCallback(() => {
        if (!user) {
            navigate(ROUTES.LOGIN, { state: { from: location.pathname } });
        }
    }, [user]);

    useEffect(() => {
        if (upvoteAmount > downvoteAmount) {
            setRatioColor("green")
        } else if (downvoteAmount > upvoteAmount) {
            setRatioColor("red")
        } else {
            setRatioColor(isDark ? "white" : "black")
        }
    }, [upvoteAmount, downvoteAmount, isDark]);

    const handleDisplayUpvote = useCallback(() => {
        noUserReroute();
        setIsUpvoted((prev) => {
            if (prev) {
                setUpvoteAmount((prev) => prev - 1);
                return false;
            } else {
                setUpvoteAmount((prev) => prev + 1);
                if (isDownvoted) {
                    setDownvoteAmount((prev) => prev - 1);
                    setIsDownvoted(false);
                }
                return true;
            }
        });
    }, [isDownvoted, noUserReroute]);

    const handleDisplayDownvote = useCallback(() => {
        noUserReroute();
        setIsDownvoted((prev) => {
            if (prev) {
                setDownvoteAmount((prev) => prev - 1);
                return false;
            } else {
                setDownvoteAmount((prev) => prev + 1);
                if (isUpvoted) {
                    setUpvoteAmount((prev) => prev - 1);
                    setIsUpvoted(false);
                }
                return true;
            }
        });
    }, [isUpvoted, noUserReroute]);


    return (
        <CardActions>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Typography variant="body1" component="p">
                    <IconButton
                        sx={{}}
                        onClick={() => {
                            handleUpvote(guideId);
                            handleDisplayUpvote();
                        }}
                    >
                        {isUpvoted ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
                    </IconButton>
                </Typography>
                <Typography variant="body1" component="p" color={ratioColor}>
                    {upvoteAmount - downvoteAmount}
                </Typography>
                <Typography variant="body1" component="p">

                    <IconButton
                        sx={{}}
                        onClick={() => {
                            handleDownvote(guideId);
                            handleDisplayDownvote();

                        }}
                    >
                        {isDownvoted ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}
                    </IconButton>
                </Typography>
            </Box>
        </CardActions>
    )
}
