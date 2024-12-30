import React from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";

export default function SignupForm({
    onSubmit,
    onReset,
    validateForm,
    title,
    errors,
    error,
    data,
    isLoading,
    onInputChange,
}) {
    return (
        <Form
            onSubmit={onSubmit}
            onReset={onReset}
            validateForm={validateForm}
            error={error}
            title={title}
            isLoading={isLoading}
            styles={{ maxWidth: "800px" }}
            node="Sign up"
        >
            <Input
                name="displayName"
                label="Display Name"
                error={errors.displayName}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="email"
                label="email"
                type="email"
                error={errors.email}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="password"
                label="password"
                type="password"
                error={errors.password}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="confirmPassword"
                label="confirm password"
                type="password"
                error={errors.confirmPassword}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
        </Form>
    );
}
