import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Nav from "./Nav";

function AppLayout() {
  return (
    <div>
      <header>
        <SideBar />
        <Nav />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
