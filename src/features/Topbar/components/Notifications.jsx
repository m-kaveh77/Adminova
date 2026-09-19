import { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi";

const Notifications = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);

  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setNotificationOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleNotification();
        }}
        className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition cursor-pointer"
      >
        <FiBell size={22} />
      </button>

      {notificationOpen && (
        <div
          className="absolute left-0 top-12 w-80 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50 cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-bold text-gray-800">اعلان‌ها</h3>
          </div>

          <div className="p-4 hover:bg-gray-50 cursor-pointer">
            <p className="text-sm font-medium text-gray-800">پیام جدید</p>

            <p className="text-xs text-gray-500 mt-1">
              یک پیام جدید برای شما ارسال شده است.
            </p>
          </div>

          <div className="p-4 hover:bg-gray-50 cursor-pointer">
            <p className="text-sm font-medium text-gray-800">بروزرسانی سیستم</p>

            <p className="text-xs text-gray-500 mt-1">
              سیستم با موفقیت بروزرسانی شد.
            </p>
          </div>

          <button className="w-full p-3 text-sm text-blue-600 hover:bg-gray-50 border-t border-gray-100 cursor-pointer">
            مشاهده همه اعلان‌ها
          </button>
        </div>
      )}
    </div>
  );
};

export default Notifications;
