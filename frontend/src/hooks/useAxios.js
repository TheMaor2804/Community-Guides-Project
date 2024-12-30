import axios from "axios";
import { useEffect } from "react";
import { useCurrentUser } from "../users/providers/UserProvider";

export default function useAxios() {
    const { token } = useCurrentUser();

    useEffect(() => {
        axios.defaults.headers.common["token"] = token;
    }, [token]);
}