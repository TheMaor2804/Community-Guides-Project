import { useCallback, useState } from "react";
import { useCurrentUser } from "../providers/UserProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { getUsers, login, signup } from "../services/usersApiService";
import { getUserFromToken, removeTokenFromCookies, setTokenInCookies } from "../services/cookiesService";
import ROUTES from "../../routes/routesModel";
import normalizeCredentials from "../helpers/normalization/normalizeCredentials";
import useAxios from "../../hooks/useAxios";

export default function useUsers() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const { setUser, setToken } = useCurrentUser();
    const navigate = useNavigate();
    const location = useLocation();
    useAxios();

    const handleLogin = useCallback(async (credentials) => {
        setIsLoading(true);
        try {
            const token = await login(credentials);
            setTokenInCookies(token);
            setToken(token);
            setUser(getUserFromToken(token));
            if (location.state?.from) {
                navigate(location.state.from, { replace: true });
            } else {
                navigate(ROUTES.ROOT, { replace: true });
            }
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);

    const handleSignup = useCallback(async (credentials) => {
        setIsLoading(true);
        try {
            const normalizedCredentials = normalizeCredentials(credentials);
            await signup(normalizedCredentials);
            await handleLogin({ email: credentials.email, password: credentials.password });
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);

    const handleLogout = useCallback(() => {
        removeTokenFromCookies();
        setUser(null);
        navigate(ROUTES.ROOT, { replace: true });
    }, []);

    const getAllUsers = useCallback(async () => {
        setIsLoading(true);
        try {
            const users = await getUsers();
            setUsers(users);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);


    return {
        isLoading,
        error,
        users,
        handleLogin,
        handleSignup,
        handleLogout,
        getAllUsers,
    }
}