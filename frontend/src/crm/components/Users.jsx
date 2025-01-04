import { CircularProgress, Container } from '@mui/material'
import React from 'react'
import Error from '../../components/Error'
import Spinner from '../../components/Spinner'

export default function Users({ users, isLoading, error }) {

    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error.message} />
    if (users.length === 0) return <Container sx={{ mt: 2 }}>No users</Container>

    return (
        <Container>
            {
                users && users.map(user => (
                    <div key={user._id}>
                        <p>{user.displayName}</p>
                    </div>
                ))
            }
        </Container>
    )
}
