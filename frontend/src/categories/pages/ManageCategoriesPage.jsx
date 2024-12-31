import React, { useCallback, useEffect, useState } from 'react'
import { useCurrentUser } from '../../users/providers/UserProvider'
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import { Button, Container, Input, Typography, useTheme } from '@mui/material';
import useCategories from '../hooks/useCategories';
import ManageableCategory from '../components/ManageableCategory';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';

export default function ManageCategoriesPage() {
    const [categoryName, setCategoryName] = useState('');
    const { user } = useCurrentUser();
    const navigate = useNavigate();
    const theme = useTheme();

    const {
        categories,
        getAllCategories,
        handleDeleteCategory,
        updateCategoryById,
        handleCreateCategory,
        categoriesError,
        categoriesIsLoading
    } = useCategories();

    const createCategory = useCallback(async () => {
        if (categoryName.length < 2) {
            alert('Category name must be at least 2 characters long');
            return;
        }
        await handleCreateCategory(categoryName);
    }, [categoryName, handleCreateCategory, getAllCategories]);

    if (!user || !user.isAdmin) {
        navigate(ROUTES.ROOT, { replace: true });
        return null;
    }

    useEffect(() => {
        getAllCategories();
    }, []);


    if (categoriesIsLoading) return <Spinner />

    if (categoriesError) return <Error errorMessage={categoriesError.message} />

    return (
        <Container
            maxWidth='100vw'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '100%',
                height: '100%',
                minHeight: '100vh',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                pt: 20,
            }}>
            <Typography variant='h4'>Manage Categories</Typography>
            {categories.map((category) => (
                <ManageableCategory
                    key={category._id}
                    category={category}
                    onDelete={handleDeleteCategory}
                    onUpdate={updateCategoryById}
                />
            ))}
            <Typography variant='h5'>Create Category</Typography>
            <Input
                placeholder="Category name"
                value={categoryName}
                onChange={(e) => {
                    setCategoryName(e.target.value)
                }}

            />
            {categoriesError && <FormHelperText error={Boolean(categoriesError)}>{categoriesError.message}</FormHelperText>}
            <Button
                variant='contained'
                color="warning"
                onClick={createCategory}
            >
                Create
            </Button>
        </Container>
    )
}
