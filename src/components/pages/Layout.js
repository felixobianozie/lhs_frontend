/**
 * Structure for all pages that will share home header
 * and top navigation
 */

import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <div>Something is here</div>
            <Outlet />
        </>
        
    )
}

export default Layout