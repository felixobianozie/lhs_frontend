import { useLocation, Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RequireAuth() {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth.isAuthenticated 
            ? <Outlet />
            : <Navigate to='/login' state={{from: location}} replace />
    )
}

export default RequireAuth;