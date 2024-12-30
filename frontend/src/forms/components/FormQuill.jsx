import { Box, Typography } from '@mui/material'
import React from 'react'
import ReactQuill from 'react-quill-new'
import 'quill/dist/quill.snow.css'; // Default Snow theme
import '../../quill/quill.css' // Your custom styles
import QuillEditor from '../../quill/QuillEditor';


export default function FormQuill({
    name,
    data,
    onChange,
    modules,
    formats,
    error
}) {

    return (
        <Box
            sx={{ width: "100%" }}
        >
            <ReactQuill
                theme='snow'
                value={data[name] ? data[name] : ''}
                onChange={onChange}
                modules={modules}
                formats={formats}
            />
            <Typography variant="caption" color="error" >
                {error}
            </Typography>
            {/* <QuillEditor /> */}
        </Box>
    )
}
