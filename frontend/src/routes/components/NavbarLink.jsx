import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ROUTES from "../routesModel";

export default function NavBarLink({ to, sx, children }) {
    const location = useLocation();

    return (
        <Link
            to={to}
            state={{ from: location.pathname !== ROUTES.LOGIN && location.pathname !== ROUTES.SIGNUP ? location.pathname : location.state?.from }}
            style={{ textDecoration: "none", color: "#fff", ...sx }}>
            {children}
        </Link>
    );
}
