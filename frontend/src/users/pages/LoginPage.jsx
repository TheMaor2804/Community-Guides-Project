import { Button, Container, Typography, useTheme } from '@mui/material'
import React, { useCallback } from 'react'
import googleButton from '../../assets/google_signin_buttons/web/1x/btn_google_signin_dark_pressed_web.png'
import useUsers from '../hooks/useUsers';
import useForm from '../../forms/hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import initialLoginForm from '../initialForms/initialLoginForm';
import loginSchema from '../models/loginSchema';
import { useCurrentUser } from '../providers/UserProvider';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
    const { isLoading, error, handleLogin } = useUsers();

    const { data, errors, handleChange, handleReset, validateForm, onSubmit } = useForm(initialLoginForm, loginSchema, handleLogin);

    const { user } = useCurrentUser();

    const navigate = useNavigate();
    const location = useLocation();

    if (user) navigate(-1);

    const theme = useTheme();

    return (
        <Container
            maxWidth='100vw'
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                width: '100%',
                height: '100%',
                minHeight: '100vh',
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Container
                sx={{
                    pt: 20,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <LoginForm
                    title="Login"
                    onSubmit={onSubmit}
                    onReset={handleReset}
                    validateForm={validateForm}
                    errors={errors}
                    error={error}
                    isLoading={isLoading}
                    data={data}
                    onInputChange={handleChange}
                />
            </Container>
        </Container>
    )
}
