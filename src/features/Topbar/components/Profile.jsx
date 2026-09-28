import { useEffect, useState } from "react";
import { FiLogOut, FiSettings, FiUser } from "react-icons/fi";

const Profile = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setProfileOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative cursor-pointer">
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleProfile();
        }}
        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600hover:bg-gray-300 transition cursor-pointer"
      >
        <FiUser size={21} />
      </button>

      {profileOpen && (
        <div
          className="absolute left-0 top-12 w-48 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50 cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b border-gray-100">
            <p className="font-bold text-gray-800">حسام مفیدی</p>

            <p className="text-xs text-gray-500 mt-1">mofidi@adminova.info</p>
          </div>

          <button className="w-full flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50cursor-pointer">
            <FiSettings size={18} />
            <span>تنظیمات</span>
          </button>

          <button className="w-full flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 border-t border-gray-100 cursor-pointer">
            <FiLogOut size={18} />
            <span>خروج</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
