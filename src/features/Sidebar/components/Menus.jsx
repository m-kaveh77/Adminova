import clsx from "clsx";
import { NavLink } from "react-router";

const Menus = ({ menus }) => {
  return (
    <div className="space-y-2">
      {menus.map((menu) => (
        <NavLink
          to={menu.href}
          key={menu.id}
          className={({ isActive }) =>
            clsx(
              "flex items-center gap-3 rounded-lg p-3 transition-all duration-200",
              isActive
                ? "bg-purple-600 text-white shadow-md"
                : "text-gray-600 hover:bg-purple-50 hover:text-purple-600",
            )
          }
        >
          <menu.icon size={21} />
          <span>{menu.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Menus;
