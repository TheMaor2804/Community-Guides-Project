import { Container, Typography, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import useGuides from '../hooks/useGuides';
import useCategories from '../../categories/hooks/useCategories';
import CategorySelector from '../../categories/components/CategorySelector';
import PageHeader from '../../components/PageHeader';

export default function MyGuidesPage() {

    const { filteredGuides, getMyGuides, guidesIsLoading, guidesError } = useGuides()

    const { categories, getAllCategories, categoriesIsLoading, categoriesError } = useCategories();

    useEffect(() => {
        getAllCategories();
        getMyGuides();
    }, [])

    const theme = useTheme();
    return (
        <Container
            maxWidth="100%"
            sx={{
                display: 'flex',
                flexDirection: "column",
                gap: 2,
                height: "100%",
                minHeight: "100vh",
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                pt: 20,
                backgroundImage: 'url(/images/userBG.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <PageHeader
                title="My Guides Page"
                subtitle="On this page you can find all the guides you made"
            />
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: 2,
                    py: 3,
                }}
            >
                <Typography variant="h4" sx={{ width: "100%", textAlign: "center" }}>
                    My Guides
                </Typography>

                <CategorySelector
                    categories={categories}
                    guides={filteredGuides}
                    guidesError={guidesError}
                    guidesIsLoading={guidesIsLoading}
                    categoriesError={categoriesError}
                    categoriesIsLoading={categoriesIsLoading}
                />
            </Container>
        </Container>
    )
}
