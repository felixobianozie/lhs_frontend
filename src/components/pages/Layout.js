/**
 * Structure for all pages that will share home header
 * and top navigation
 */

import { Outlet } from "react-router-dom";
import FlashMsg from "../FlashMsg";
import HomeHeader from "../HomeHeader";
import HomeTopNav from "../HomeTopNav";
import Footer from "../Footer";
import LoginModal from "../LoginModal";

function Layout() {
    return (
        <>
            <FlashMsg/> 
            <HomeHeader/>
            <HomeTopNav/>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout