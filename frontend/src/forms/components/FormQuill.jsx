import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill-new'
import 'quill/dist/quill.snow.css'; // Default Snow theme
import '../../quill/quill.css'
import { useCustomTheme } from '../../providers/CustomThemeProvider';

export default function FormQuill({
    name,
    data,
    onChange,
    modules,
    formats,
    error,
    onContentLengthChange,
}) {

    const { isDark } = useCustomTheme();
    const quillRef = useRef(null);
    const [contentLength, setContentLength] = useState(0);

    useEffect(() => {
        if (quillRef.current) {
            const length = quillRef.current.getEditor().getLength() - 1;
            setContentLength(length);
            onContentLengthChange(length);
        }
    }, [data, onContentLengthChange]);

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column',
            width: '100%', pb: 10
        }}>
            <ReactQuill
                ref={quillRef}
                className={isDark ? 'dark' : 'light'}
                theme='snow'
                value={data[name] ? data[name] : ''}
                onChange={onChange}
                modules={modules}
                formats={formats}
            />
            <Typography variant="caption" color="error" >
                {error}
            </Typography>
        </Box>
    )
}
