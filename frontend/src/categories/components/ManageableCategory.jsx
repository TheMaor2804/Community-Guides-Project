import { Card } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { CardHeader, CardContent, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import useCategories from '../hooks/useCategories';
import EditIcon from '@mui/icons-material/Edit';
import CategoryDeleteDialogue from './CategoryDeleteDialogue';

export default function ManageableCategory({ category, onDelete, onUpdate }) {

    const [categoryName, setCategoryName] = useState(category.name);

    const handleEditClick = useCallback(() => {
        const newCategoryName = window.prompt("Enter new category name", category.name);
        if (newCategoryName !== null) {
            setCategoryName(newCategoryName);
            onUpdate(category._id, { name: newCategoryName });
        }
    }, []);

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleDialog = (term) => {
        if (term === "open") return setIsDialogOpen(true);
        setIsDialogOpen(false);
    };

    const handleDeleteCategory = useCallback(async () => {
        handleDialog();
        onDelete(category._id);
    }, [onDelete, category._id]);


    return (
        <Card
            sx={{
                minWidth: "20%",
                maxWidth: 1200,
                mb: 2,
                mt: 2
            }}
        >
            <CardHeader
                title={category.name}
                action={
                    <>
                        <IconButton
                            aria-label="edit"
                            onClick={handleEditClick}>
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            aria-label="delete"
                            onClick={() => handleDialog("open")}>
                            <DeleteIcon />
                        </IconButton>
                    </>
                }
            />
            <CategoryDeleteDialogue
                isDialogOpen={isDialogOpen}
                onDelete={handleDeleteCategory}
                onChangeDialog={() => handleDialog()}
            />
        </Card>
    )
}
