import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const RootLayout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/register";
  return (
    <main className="p-4">
        {!hideHeaderFooter&&<Header/>}
        <Outlet/>
        {!hideHeaderFooter&&<Footer/>}
    </main>
  )
}

export default RootLayout;
