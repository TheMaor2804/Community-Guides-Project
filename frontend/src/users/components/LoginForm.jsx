import React from 'react'
import Form from '../../forms/components/Form'
import Input from '../../forms/components/Input'
import FormButton from '../../forms/components/FormButton';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

export default function LoginForm(
    {
        onSubmit,
        onReset,
        validateForm,
        title,
        errors,
        error,
        data,
        isLoading,
        onInputChange,
        handleChangeCheckBox,
    }
) {
    const navigate = useNavigate();


    return (
        <Form
            onSubmit={onSubmit}
            onReset={onReset}
            validateForm={validateForm}
            title={title}
            error={error}
            isLoading={isLoading}
            styles={{ maxWidth: "800px" }}
            node='Log in'
        >
            <Input
                name="email"
                label="email"
                error={errors.email}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="password"
                label="Password"
                type="password"
                error={errors.password}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <FormButton
                node={"Click here to sign up instead"}
                color='warning'
                onClick={() => navigate(ROUTES.SIGNUP)}
            >
            </FormButton>
        </Form>
    )
}
