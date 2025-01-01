import React, { useCallback, useEffect, useState } from 'react'
import { useCurrentUser } from '../../../users/providers/UserProvider'
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, CardActions, IconButton, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ROUTES from '../../../routes/routesModel';

export default function GuideActionBar({ guideId, upvotes, downvotes, handleUpvote, handleDownvote }) {

    const { user } = useCurrentUser();

    const [isUpvoted, setIsUpvoted] = useState(upvotes?.includes(user?._id));
    const [isDownvoted, setIsDownvoted] = useState(downvotes?.includes(user?._id));

    const [upvoteAmount, setUpvoteAmount] = useState(upvotes?.length);
    const [downvoteAmount, setDownvoteAmount] = useState(downvotes?.length);

    const [ratioColor, setRatioColor] = useState("white");

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
            setRatioColor("white")
        }
    }, [upvoteAmount, downvoteAmount]);

    const handleDisplayUpvote = useCallback(() => {
        noUserReroute();
        if (isDownvoted) {
            handleDisplayDownvote();
        }
        setIsUpvoted((prev) => {
            if (prev) {
                setUpvoteAmount((prev) => prev - 1)
            } else {
                setUpvoteAmount((prev) => prev + 1)
            }
            return !prev
        })
    }, [guideId, handleUpvote, isDownvoted]);

    const handleDisplayDownvote = useCallback(() => {
        noUserReroute();
        if (isUpvoted) {
            handleDisplayUpvote();
        }
        setIsDownvoted((prev) => {
            if (prev) {
                setDownvoteAmount((prev) => prev - 1)
            } else {
                setDownvoteAmount((prev) => prev + 1)
            }
            return !prev
        })
    }, [guideId, handleDownvote, isUpvoted]);


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
