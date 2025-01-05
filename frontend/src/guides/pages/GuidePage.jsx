import React, { useCallback, useEffect, useState } from 'react'
import useGuides from '../hooks/useGuides'
import { Box, Card, CardContent, Container, IconButton, Typography, useTheme } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useCurrentUser } from '../../users/providers/UserProvider';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GuideActionBar from '../components/guides/GuideActionBar';
import GuideModBar from '../components/guides/GuideModBar';
import ROUTES from '../../routes/routesModel';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import { useCustomTheme } from '../../providers/CustomThemeProvider';
import GuideDeleteDialog from '../components/guides/GuideDeleteDialog';

export default function GuidePage() {

    const { guide, guidesError, guidesIsLoading, getGuideById, handleUpvoteGuide, handleDownvoteGuide, handleApproveGuide, handleDeleteGuide, handleFeatureGuide } = useGuides();
    const { id } = useParams();
    const { user } = useCurrentUser();
    const { isDark } = useCustomTheme();

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleDialog = useCallback((term) => {
        if (term === "open") return setIsDialogOpen(true);
        setIsDialogOpen(false);
    }, []);

    const deleteGuide = useCallback(async () => {
        handleDeleteGuide(guide._id);
        navigate(-1);
    }, [guide]);

    useEffect(() => {
        getGuideById(id);
    }, [id]);

    useEffect(() => {
        if (!guidesIsLoading) {
            if (!guide.isApproved && ((user._id !== guide.user_id && !user?.isMod && !user?.isAdmin))) {
                navigate(location.state?.from || ROUTES.ROOT);
            }
        }
    }, [user, guide, guidesIsLoading]);

    const handleUpvote = useCallback(async () => {
        await handleUpvoteGuide(guide._id);
    }, [guide])

    const handleDownvote = useCallback(async () => {
        await handleDownvoteGuide(guide._id);
    }, [guide])

    const theme = useTheme();

    if (guidesIsLoading) return <Spinner />
    if (guidesError) return <Error errorMessage={guidesError.message} />

    return (
        <Container
            maxWidth="100vw"
            sx={{
                display: 'flex',
                flexDirection: "column",
                backgroundColor: theme.palette.background.default,
                height: "100%",
                minHeight: "100vh",
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundImage: 'url(/images/guideBG.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                pt: 20,
            }}

        >
            <Card key={guide._id} sx={{ width: "100%", maxWidth: 1200, mb: 2, mt: 2 }}>
                <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {user && guide.user_id === user._id &&
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                            <IconButton
                                size='large'
                                sx={{ color: isDark ? "white" : "black" }}
                                onClick={() => handleDialog("open")}
                            >
                                <DeleteIcon />
                            </IconButton>
                            <IconButton
                                size='large'
                                sx={{ color: isDark ? "white" : "black" }}
                                onClick={() => { navigate(ROUTES.EDIT_GUIDE + "/" + guide._id) }}
                            >
                                <EditIcon />
                            </IconButton>
                        </Box>
                    }
                    <Typography variant="h2" component="h2">
                        {guide.title}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        by {guide.author}
                    </Typography>
                    <Box className={"content-container"} dangerouslySetInnerHTML={{ __html: guide.content }}
                        sx={{ mt: 2 }} />
                    <GuideActionBar
                        guideId={guide._id}
                        upvotes={guide.upvotes}
                        downvotes={guide.downvotes}
                        handleUpvote={handleUpvote}
                        handleDownvote={handleDownvote}
                    />
                    {guide.youtubeUrl && (
                        <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", gap: 1, justifyContent: "center" }}>
                            <Typography variant="h3" component="h3">
                                Guide Video
                            </Typography>
                            <Container>
                                <iframe
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${guide.youtubeUrl.split('v=')[1]}`}
                                    title="YouTube video player"
                                    allowFullScreen
                                ></iframe>
                            </Container>
                        </Box>
                    )}
                    <GuideModBar
                        guide={guide}
                        handleDelete={() => handleDialog("open")}
                        handleApprove={handleApproveGuide}
                        handleReject={handleApproveGuide}
                        handleFeature={handleFeatureGuide}
                    />
                </CardContent>
                <GuideDeleteDialog
                    isDialogOpen={isDialogOpen}
                    onDelete={deleteGuide}
                    onChangeDialog={() => handleDialog()}
                />
            </Card>
        </Container >
    )
}
