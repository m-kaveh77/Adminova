import SidebarHeader from "./components/SidebarHeader";
import Menus from "./components/Menus";

import menus from "../../data/menus";

const Sidebar = () => {
  return (
    <aside className="bg-white border-l border-gray-200 p-5 flex flex-col transition-all duration-300 w-64">
      <SidebarHeader />
      <Menus menus={menus} />
    </aside>
  );
};

export default Sidebar;
