import React from 'react'
import { Container, Grid2 } from '@mui/material';
import GuideComponent from './guides/GuideComponent';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';

export default function Guides({ guides, isLoading, error }) {

    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error.message} />
    if (guides.length === 0) return <Container sx={{ my: 2 }}>No guides</Container>

    return (
        <Grid2 container spacing={2} sx={{ flexGrow: 1 }}>
            {guides && guides.map(guide => (
                <GuideComponent key={guide._id} guide={guide} />
            ))}
        </Grid2>
    )
}
