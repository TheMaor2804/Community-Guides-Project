import { Box, Typography } from '@mui/material'
import React from 'react'
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
    error
}) {

    const { isDark } = useCustomTheme();
    const quillRef = React.useRef(null);
    const [contentLength, setContentLength] = React.useState(1);

    React.useEffect(() => {
        if (quillRef.current) {
            setContentLength(quillRef.current.getEditor().getLength() - 1);
        }
    }, [data, name]);


    return (
        <Box
            sx={{ width: "100%" }}
        >
            <ReactQuill
                ref={quillRef}
                className={isDark ? 'dark' : 'light'}
                theme='snow'
                value={data[name] ? data[name] : ''}
                onChange={onChange}
                modules={modules}
                formats={formats}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Typography variant="caption"  >
                    {contentLength} characters
                </Typography>
                <Typography variant="caption" color="error" >
                    {error}
                </Typography>
            </Box>
        </Box>
    )
}
