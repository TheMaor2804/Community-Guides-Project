import React, { useEffect } from 'react'
import useGuides from '../hooks/useGuides'
import { useCurrentUser } from '../../users/providers/UserProvider'
import { useNavigate, useParams } from 'react-router-dom';
import initialGuideForm from '../initialForms/initialGuideForm';
import guideSchema from '../models/guideSchema';
import ROUTES from '../../routes/routesModel';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import { Container, Typography, useTheme } from '@mui/material';
import CreateGuideForm from '../components/CreateGuideForm';
import useCategories from '../../categories/hooks/useCategories';
import useForm from '../../forms/hooks/useForm';
import { getCategories } from '../../categories/services/categoriesApiService';

export default function EditGuidePage() {
    const { guide, guidesIsLoading, guidesError, getGuideById, handleUpdateGuide } = useGuides();

    const { categories, getAllCategories, categoriesError, categoriesIsLoading } = useCategories();

    const theme = useTheme();

    const { user } = useCurrentUser();

    const { id } = useParams();

    const navigate = useNavigate();

    const { data, setData, errors, onSubmit, handleChange, handleReset, validateForm } = useForm(initialGuideForm, guideSchema,
        async () => {
            await handleUpdateGuide(id, data);
            navigate(ROUTES.MY_GUIDES);
        });

    useEffect(() => {
        getAllCategories();
        getGuideById(id).then((data) => {
            if (user && user._id === data.user_id) {
                const { title, category, youtubeUrl, content } = data;
                let guide = { title, category, youtubeUrl, content };
                setData(guide);
            }
            else {
                navigate(ROUTES.ROOT);
            }
        })
    }, [getGuideById, getAllCategories, setData, id, user]);

    if (guidesIsLoading || categoriesIsLoading) return <Spinner />;
    if (guidesError || categoriesError) return <Error errorMessage={guidesError ? guidesError : categoriesError} />;
    return (
        <Container
            maxWidth='100vw'
            sx={{
                pt: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: '100%',
                minHeight: '100vh',
                width: '100%',
                backgroundColor: theme.palette.background.default,
            }}>
            <CreateGuideForm
                onSubmit={onSubmit}
                onReset={handleReset}
                validateForm={validateForm}
                title="Edit Guide"
                errors={errors}
                error={guidesError}
                data={data}
                onInputChange={handleChange}
                categories={categories}
            />
        </Container>
    )
}
