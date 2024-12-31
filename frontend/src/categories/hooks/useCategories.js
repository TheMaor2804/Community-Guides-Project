import { useCallback, useState } from "react";
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../services/categoriesApiService";
import useAxios from "../../hooks/useAxios";

export default function useCategories() {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({});
    const [categoriesError, setError] = useState();
    const [categoriesIsLoading, setIsLoading] = useState(true);

    useAxios();

    const getAllCategories = useCallback(async () => {
        setIsLoading(true);
        try {
            const categories = await getCategories();
            setCategories(categories);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);

    const getCategoryById = useCallback(async (categoryId) => {
        setIsLoading(true);
        try {
            const category = await getCategory(categoryId);
            setCategory(category);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);

    const updateCategoryById = useCallback(async (categoryId, category) => {
        setIsLoading(true);
        try {
            await updateCategory(categoryId, category);
            getAllCategories();
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, [getAllCategories]);

    const handleCreateCategory = useCallback(async (category) => {
        try {
            await createCategory(category);
            getAllCategories();
        } catch (error) {
            setError(error);
        }
    }, [getAllCategories]);

    const handleDeleteCategory = useCallback(async (categoryId) => {
        setIsLoading(true);
        try {
            await deleteCategory(categoryId);
            getAllCategories();
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, [getAllCategories]);

    return {
        categories,
        category,
        categoriesError,
        categoriesIsLoading,
        getAllCategories,
        getCategoryById,
        updateCategoryById,
        handleCreateCategory,
        handleDeleteCategory,
    }
}