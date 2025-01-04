import React, { useEffect } from 'react'
import { useCurrentUser } from '../../users/providers/UserProvider'
import { Navigate } from 'react-router-dom'
import ROUTES from '../../routes/routesModel'
import useNews from '../../news/hooks/useNews'
import Spinner from '../../components/Spinner'
import Error from '../../components/Error'
import { Container } from '@mui/material'
import News from '../../news/components/News'
import { useTheme } from '@emotion/react'
import NavBarItem from '../../routes/components/NavbarItem'

export default function ManageNews() {
    const { news, getAllNews, handleCreateNews, newsIsLoading, newsError } = useNews()

    const { user } = useCurrentUser()
    if (!user || !user.isAdmin) return <Navigate to={ROUTES.ROOT} replace />

    useEffect(() => {
        getAllNews()
    }, []);

    const theme = useTheme();

    if (newsIsLoading) return <Spinner />

    if (newsError) return <Error error={newsError.message} />

    return (
        <Container
            maxWidth="100vw"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%',
                height: '100%',
                minHeight: '100vh',
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                gap: 2,
                pt: 20,
            }}
        >
            <News news={news} isLoading={newsIsLoading} error={newsError} />
            <NavBarItem label={"Create News"} to={ROUTES.CREATE_NEWS} />
        </Container>
    )
}
