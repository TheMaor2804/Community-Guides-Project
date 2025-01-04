import React, { useEffect } from 'react'
import useUsers from '../../users/hooks/useUsers'
import { Container } from '@mui/material'
import Users from '../components/Users'
import { useCurrentUser } from '../../users/providers/UserProvider'
import { Navigate } from 'react-router-dom'
import ROUTES from '../../routes/routesModel'

export default function ManageUsersPage() {

    const { user } = useCurrentUser()
    if (!user || !user.isAdmin) return <Navigate to={ROUTES.ROOT} replace />

    const { users, getAllUsers, isLoading, error } = useUsers()

    useEffect(() => {
        getAllUsers()
    }, [])


    return (
        <Container sx={{
            pt: 20,
        }}>
            <Users users={users} isLoading={isLoading} error={error} />
        </Container>
    )
}
