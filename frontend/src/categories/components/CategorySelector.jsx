import { CircularProgress, Container, FormControl, Grid2, MenuItem, Select, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Guides from '../../guides/components/Guides';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import { useCustomTheme } from '../../providers/CustomThemeProvider';
import GuidesSearchBar from '../../guides/components/guides/GuidesSearchBar';

export default function CategorySelector({ categories, guides, guidesError, guidesIsLoading, categoriesError, categoriesIsLoading }) {

    const [filteredGuides, setFilteredGuides] = useState([])

    const [selectedCategory, setSelectedCategory] = useState(0)

    const { isDark } = useCustomTheme();

    useEffect(() => {
        if (categories && categories.length > 0) {
            setSelectedCategory(0);
        }
    }, [categories]);

    useEffect(() => {
        if (!guides) {
            return;
        }
        if (selectedCategory === 0) {
            setFilteredGuides(guides);
        } else {
            setFilteredGuides(guides.filter(guide => guide.category === selectedCategory));
        }
    }, [selectedCategory, guides]);

    if (categoriesIsLoading) return <Spinner />

    if (categoriesError) return <Error errorMessage={categoriesError.message} />

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
            width: '100%',
        }}>
            <GuidesSearchBar />
            <Typography variant='h4'>Select a Category</Typography>
            <Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                sx={{ color: isDark ? "white" : "black" }}
            >
                <MenuItem value={0}>
                    All
                </MenuItem>
                {categories.map(category => (
                    <MenuItem key={category._id} value={category._id}>
                        {category.name}
                    </MenuItem>
                ))}
            </Select>

            <Grid2 container spacing={2} sx={{ width: "100%" }}>
                <Guides
                    guides={filteredGuides}
                    isLoading={guidesIsLoading}
                    error={guidesError}
                />
            </Grid2>
        </Container>
    )
}
