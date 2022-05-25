import React from 'react'
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "./AuthProvider";

const ProfileLayout = () => {
    const { auth } = useAuthContext();
    const location = useLocation();

    if (!auth) {
        const from = location.state?.from?.pathname || "/";

        return <Navigate to={from} state={{ replace: true }} />;
    }

    return (
        <Outlet />
    )
}

export default ProfileLayout