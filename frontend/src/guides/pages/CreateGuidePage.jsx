import { Container, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import 'react-quill-new/dist/quill.snow.css';
import { useLocation, useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import { useCurrentUser } from '../../users/providers/UserProvider';
import useCategories from '../../categories/hooks/useCategories';
import CreateGuideForm from '../components/CreateGuideForm';
import useForm from '../../forms/hooks/useForm';
import initialGuideForm from '../initialForms/initialGuideForm';
import guideSchema from '../models/guideSchema';
import useGuides from '../hooks/useGuides';

export default function CreateGuidePage() {

    const { user } = useCurrentUser();

    const { handleCreateGuide, guidesError, guidesIsLoading } = useGuides();

    const { data, errors, handleChange, handleReset, validateForm, onSubmit } = useForm(initialGuideForm, guideSchema, handleCreateGuide);

    const { categories, getAllCategories } = useCategories();

    useEffect(() => {
        getAllCategories();
    }, []);

    const navigate = useNavigate();
    const location = useLocation();

    if (!user) return navigate(ROUTES.LOGIN, { state: { from: location.pathname } });


    const theme = useTheme();

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
                title="Create Guide"
                errors={errors}
                error={guidesError}
                data={data}
                onInputChange={handleChange}
                categories={categories}
            />
        </Container>
    )
}
