import React, { useState } from 'react';
import Form from '../../forms/components/Form';
import Input from '../../forms/components/Input';
import { defaultModules } from '../../quill/modules';
import { defaultFormats } from '../../quill/formats';
import FormSelect from '../../forms/components/FormSelect';
import FormQuill from '../../forms/components/FormQuill';
import { Typography } from '@mui/material';

export default function CreateGuideForm({
    onSubmit,
    onReset,
    validateForm,
    title,
    errors,
    error,
    data,
    isLoading = false,
    onInputChange,
    categories,
}) {
    const [contentLength, setContentLength] = useState(0);

    const handleContentLengthChange = (length) => {
        setContentLength(length);
    };

    return (
        <>
            <Form
                onSubmit={onSubmit}
                onReset={onReset}
                validateForm={validateForm}
                error={error}
                title={title}
                isLoading={isLoading}
                node='Create'
                styles={{ maxWidth: "800px" }}
                isSubmitDisabled={contentLength < 50}
            >
                <Input
                    name="title"
                    label="Title"
                    error={errors.title}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                />
                <FormSelect
                    label="Category"
                    onChange={onInputChange}
                    selection={categories}
                    data={data}
                    name="category"
                    error={errors.category}
                />
                <Input
                    name="youtubeUrl"
                    label="Youtube Url"
                    error={errors.youtubeUrl}
                    onChange={onInputChange}
                    data={data}
                    required={false}
                    sm={6}
                />
                <FormQuill
                    name="content"
                    label="Content"
                    error={errors.content}
                    data={data}
                    onChange={onInputChange}
                    modules={defaultModules}
                    formats={defaultFormats}
                    onContentLengthChange={handleContentLengthChange}
                />
                {contentLength < 50 && (
                    <Typography variant="caption" color="error">
                        Content must be at least 50 characters long.
                    </Typography>
                )}
            </Form>
        </>
    );
}