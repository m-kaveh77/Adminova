import { useState } from "react";
import { FiBox, FiHome, FiLogOut, FiSettings, FiUsers } from "react-icons/fi";
import { Link } from "react-router";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <aside
      className={`
          bg-white border-l border-gray-200
          p-5
          flex flex-col
          transition-all duration-300
          ${sidebarOpen ? "w-64" : "w-20"}
        `}
    >
      <div className="pb-6 border-b border-zinc-200">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="لوگو" className="size-10" />
          <span>ادمینوا</span>
        </Link>
      </div>

      <nav className="space-y-2">
        <a
          href="#"
          className={`
              flex items-center rounded-lg hover:bg-gray-100
              ${sidebarOpen ? "gap-3 p-3" : "justify-center p-3"}
            `}
        >
          <FiHome size={21} />
          {sidebarOpen && <span>داشبورد</span>}
        </a>

        <a
          href="#"
          className={`
              flex items-center rounded-lg hover:bg-gray-100
              ${sidebarOpen ? "gap-3 p-3" : "justify-center p-3"}
            `}
        >
          <FiUsers size={21} />
          {sidebarOpen && <span>کاربران</span>}
        </a>

        <a
          href="#"
          className={`
              flex items-center rounded-lg hover:bg-gray-100
              ${sidebarOpen ? "gap-3 p-3" : "justify-center p-3"}
            `}
        >
          <FiBox size={21} />
          {sidebarOpen && <span>محصولات</span>}
        </a>

        <a
          href="#"
          className={`
              flex items-center rounded-lg hover:bg-gray-100
              ${sidebarOpen ? "gap-3 p-3" : "justify-center p-3"}
            `}
        >
          <FiSettings size={21} />
          {sidebarOpen && <span>تنظیمات</span>}
        </a>
      </nav>

      <button
        className={`
                      mt-auto
                      flex items-center
                      rounded-lg
                      text-red-600
                      hover:bg-red-50
                      transition
                      cursor-pointer
                      ${sidebarOpen ? "gap-3 p-3" : "justify-center p-3"}
                  `}
      >
        <FiLogOut size={21} />

        {sidebarOpen && <span>خروج از پنل مدیریت</span>}
      </button>
    </aside>
  );
};

export default Sidebar;
