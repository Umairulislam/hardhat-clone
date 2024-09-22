// DocsLayout.jsx
import { Outlet } from "react-router-dom";
import {SideNavbar} from "../../components";

const DocsLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar for documentation links */}
      <SideNavbar />
      {/* Nested documentation routes */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default DocsLayout;
