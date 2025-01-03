import { useCallback, useState } from "react";
import Joi from "joi";

export default function useForm(initialForm, schema, handleSubmit) {
    const [data, setData] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const validateProperty = useCallback(
        (name, value) => {

            let joiSchema = Joi.object({ [name]: schema[name] });

            if (name === 'confirmPassword') {
                const password = data['password'];
                if (password && password !== value) {
                    return "Passwords do not match";
                }
                else {
                    return null;
                }
            }

            let { error } = joiSchema.validate({ [name]: value });

            return error ? error.details[0].message : null;
        },
        [schema, data]
    );

    const handleChange = useCallback(
        (e) => {
            let value, name;

            if (typeof e === 'string') {
                value = e;
                name = 'content';
            } else if (e.target.type === "file") {
                value = e.target.files[0];
                name = e.target.name;
            }
            else {
                value = e.target.value;
                name = e.target.name;
            }

            const errorMessage = validateProperty(name, value);

            if (errorMessage) {
                setErrors((prev) => ({ ...prev, [name]: errorMessage }));
            } else {
                setErrors((prev) => {
                    let obj = { ...prev };
                    delete obj[name];
                    return obj;
                });
            }
            setData((prev) => ({ ...prev, [name]: value }));
        },
        [validateProperty]
    );

    const handleChangeCheckBox = useCallback((e) => {
        let value = e.target.checked;
        let name = e.target.name;
        setData((prev) => ({ ...prev, [name]: value }));
    }, []);

    const validateForm = useCallback(() => {
        const joiSchema = Joi.object(schema);
        const { error } = joiSchema.validate(data);
        if (error) {
            return false;
        }
        return true;
    }, [schema, data]);

    const handleReset = useCallback(() => {
        setData(initialForm);
        setErrors({});
    }, [initialForm]);

    const onSubmit = useCallback(() => {
        handleSubmit(data);
    }, [data]);

    return {
        data,
        errors,
        setData,
        handleChange,
        handleReset,
        validateForm,
        onSubmit,
        handleChangeCheckBox,
    };
}
