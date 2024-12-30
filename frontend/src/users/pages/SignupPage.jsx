import { Button, Container, Divider, FormControl, FormGroup, Input, useTheme } from '@mui/material'
import React, { useCallback, useEffect } from 'react'
import googleButton from '../../assets/google_signin_buttons/web/1x/btn_google_signin_dark_pressed_web.png'
import SignupForm from '../components/SignupForm';
import useForm from '../../forms/hooks/useForm';
import { useCurrentUser } from '../providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import initialSignupForm from '../initialForms/initialSignupForm';
import signupSchema from '../models/signupSchema';

export default function SignupPage() {

    const { handleSignup, error, isLoading } = useUsers();
    const navigate = useNavigate();

    const {
        data,
        errors,
        handleChange,
        handleReset,
        validateForm,
        onSubmit,
        handleChangeCheckBox,
    } = useForm(initialSignupForm, signupSchema, handleSignup);

    const { user } = useCurrentUser();

    const theme = useTheme();

    if (user) return navigate(-1);

    return (
        <Container
            maxWidth="100vw"
            sx={{
                pt: 20,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                height: "100%",
                minHeight: "100vh",
                flexDirection: "column",
                backgroundColor: theme.palette.background.default,
            }}
        >
            <SignupForm
                onSubmit={onSubmit}
                onReset={handleReset}
                validateForm={validateForm}
                title={"signup"}
                errors={errors}
                error={error}
                data={data}
                isLoading={isLoading}
                onInputChange={handleChange}
                handleChangeCheckBox={handleChangeCheckBox}
            />
        </Container>
    )
}
