import { Outlet } from "react-router-dom";
import DrawerAppBar from "./DrawerAppBar";

const Layout = () => {
  return (
    <div>
      <DrawerAppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
