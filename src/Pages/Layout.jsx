import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const Layout = () => {
    return (
        <div className="flex flex-col items-start w-full">
            <Header />
            <Outlet />
        </div>

    )
}

export default Layout;