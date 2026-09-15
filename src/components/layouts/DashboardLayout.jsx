import { useEffect, useState } from "react";
import {
  FiBell,
  FiBox,
  FiHome,
  FiLogOut,
  FiSettings,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { HiOutlineMenu, HiOutlineMenuAlt3 } from "react-icons/hi";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen);
    setProfileOpen(false);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
    setNotificationOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setNotificationOpen(false);
      setProfileOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside
        className={`
          bg-white border-l border-gray-200
          p-5
          flex flex-col
          transition-all duration-300
          ${sidebarOpen ? "w-64" : "w-20"}
        `}
      >
        <img src="/images/logo.png" alt="لوگو" className="mx-auto w-25" />

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

      {/* Content */}
      <main className="flex-1 min-w-0">
        {/* Header */}
        <header
          className="
            h-20 bg-white border-b border-gray-200
            flex items-center justify-between px-8
          "
        >
          {/* Sidebar Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="
              p-1 rounded-lg
              text-gray-600
              hover:bg-gray-100
              transition
              cursor-pointer
            "
          >
            {sidebarOpen ? (
              <HiOutlineMenu size={24} />
            ) : (
              <HiOutlineMenuAlt3 size={24} />
            )}
          </button>

          {/* User Actions */}
          <div className="flex items-center gap-5">
            {/* Notification */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleNotification();
                }}
                className="
                  relative p-2
                  text-gray-600
                  hover:bg-gray-100
                  rounded-lg
                  transition
                  cursor-pointer
                "
              >
                <FiBell size={22} />
              </button>

              {/* Notification Panel */}
              {notificationOpen && (
                <div
                  className="
                    absolute left-0 top-12
                    w-80
                    bg-white
                    border border-gray-200
                    rounded-xl
                    shadow-lg
                    overflow-hidden
                    z-50
                    cursor-pointer
                  "
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-800">اعلان‌ها</h3>
                  </div>

                  <div className="p-4 hover:bg-gray-50 cursor-pointer">
                    <p className="text-sm font-medium text-gray-800">
                      پیام جدید
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      یک پیام جدید برای شما ارسال شده است.
                    </p>
                  </div>

                  <div className="p-4 hover:bg-gray-50 cursor-pointer">
                    <p className="text-sm font-medium text-gray-800">
                      بروزرسانی سیستم
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      سیستم با موفقیت بروزرسانی شد.
                    </p>
                  </div>

                  <button
                    className="
                      w-full
                      p-3
                      text-sm
                      text-blue-600
                      hover:bg-gray-50
                      border-t border-gray-100
                      cursor-pointer
                    "
                  >
                    مشاهده همه اعلان‌ها
                  </button>
                </div>
              )}
            </div>

            {/* Avatar */}
            <div className="relative cursor-pointer">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleProfile();
                }}
                className="
                  w-10 h-10
                  rounded-full
                  bg-gray-200
                  flex items-center justify-center
                  text-gray-600
                  hover:bg-gray-300
                  transition
                  cursor-pointer
                "
              >
                <FiUser size={21} />
              </button>

              {/* Profile Panel */}
              {profileOpen && (
                <div
                  className="
                    absolute left-0 top-12
                    w-48
                    bg-white
                    border border-gray-200
                    rounded-xl
                    shadow-lg
                    overflow-hidden
                    z-50
                    cursor-pointer
                  "
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-4 border-b border-gray-100">
                    <p className="font-bold text-gray-800">کاربر سیستم</p>

                    <p className="text-xs text-gray-500 mt-1">
                      admin@example.com
                    </p>
                  </div>

                  <button
                    className="
                      w-full
                      flex items-center gap-3
                      p-3
                      text-gray-700
                      hover:bg-gray-50
                      cursor-pointer
                    "
                  >
                    <FiSettings size={18} />
                    <span>تنظیمات</span>
                  </button>

                  <button
                    className="
                      w-full
                      flex items-center gap-3
                      p-3
                      text-red-600
                      hover:bg-red-50
                      border-t border-gray-100
                      cursor-pointer
                    "
                  >
                    <FiLogOut size={18} />
                    <span>خروج</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <section className="p-8">
          <h2 className="text-2xl font-bold text-gray-800">داشبورد</h2>

          <p className="mt-3 text-gray-600">
            محتوای صفحه در این قسمت قرار می‌گیرد.
          </p>
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
