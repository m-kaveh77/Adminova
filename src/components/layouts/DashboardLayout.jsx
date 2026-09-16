import { Outlet } from "react-router";
import Sidebar from "../../features/Sidebar/Sidebar";
import Topbar from "../../features/Topbar/Topbar";

const DashboardLayout = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <Topbar />

        <section className="p-8">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default DashboardLayout;
