import { Outlet } from "react-router";
import Header from "./components/layout/header";
import MainContent from "./components/layout/main-content";
import Footer from "./components/layout/footer";

export default function LayoutMain() {
  return <>
    <Header/>

    <MainContent>
      <Outlet />
    </MainContent>
    
    <Footer />
  </>
}