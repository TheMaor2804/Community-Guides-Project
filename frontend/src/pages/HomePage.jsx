import React, { useEffect } from 'react'
import useCategories from '../categories/hooks/useCategories';
import { Container, Grid2, Typography, useTheme } from '@mui/material';
import CategorySelector from '../categories/components/CategorySelector';
import useGuides from '../guides/hooks/useGuides';
import Guides from '../guides/components/Guides';
import { Link } from 'react-router-dom';
import useNews from '../news/hooks/useNews';
import News from '../news/components/News';

export default function HomePage() {

    const { guides, getAllApprovedGuides, guidesIsLoading, guidesError } = useGuides()

    const { categories, getAllCategories, categoriesIsLoading, categoriesError } = useCategories();

    useEffect(() => {
        getAllCategories();
        getAllApprovedGuides();
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
                backgroundImage: 'url(/images/homeBG.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            {/* NEWS section */}

            <Container
                sx={{
                    display: 'flex',
                    alignItems: "center",
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: 2,
                    justifyContent: "center",
                    gap: 2,
                    flexDirection: "column",
                    py: 3,
                }}
            >
                <Typography variant="h4" sx={{ width: "100%", textAlign: "center" }}>
                    News
                </Typography>
                <News
                    news={news}
                    isLoading={newsIsLoading}
                    error={newsError}
                />
            </Container>

            {/* FEATURED section */}

            <Container
                sx={{
                    display: 'flex',
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: 2,
                    py: 3,
                }}
            >
                <Typography variant="h4" sx={{ width: "100%", textAlign: "center" }}>
                    Featured Guides
                </Typography>
                <Grid2 container spacing={2} sx={{ width: "100%" }}>
                    <Guides
                        guides={guides.filter(guide => guide.isFeatured)}
                        isLoading={guidesIsLoading}
                        error={guidesError} />
                </Grid2>
            </Container>

            {/* REFERRAL section */}
            <Link
                to="https://www.ashesofcreation.com/r/WXPGKABHUUK2NWVP" target="_blank" rel="noopener noreferrer" >
                <img
                    style={{ maxWidth: "100%" }}
                    src="./images/referralImg.png"
                    alt="Referral" />
            </Link>


            {/* CATEGORY section */}

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
                    Guides
                </Typography>

                <CategorySelector
                    categories={categories}
                    guides={guides}
                    guidesError={guidesError}
                    guidesIsLoading={guidesIsLoading}
                    categoriesError={categoriesError}
                    categoriesIsLoading={categoriesIsLoading}
                />
            </Container>
        </Container>
    )
}
