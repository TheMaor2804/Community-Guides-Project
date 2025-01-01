import React from 'react';
import Form from '../../forms/components/Form';
import Input from '../../forms/components/Input';
import { defaultModules } from '../../quill/modules';
import { defaultFormats } from '../../quill/formats';
import FormSelect from '../../forms/components/FormSelect';
import FormQuill from '../../forms/components/FormQuill';

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
                />
            </Form>

        </>
    )
}
