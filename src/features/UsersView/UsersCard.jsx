import clsx from "clsx";
import { FiEye, FiEyeOff } from "react-icons/fi";
import RemoveUserIcon from "./components/RemoveUserIcon";
import ChangeVisibilityIcon from "./components/ChangeVisibilityIcon";
import EditUserIcon from "./components/EditUserIcon";

const UsersCard = ({ user, removeUser, changeUserVisibility, editUser }) => {
  return (
    <article className=" group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/40 cursor-pointer">
      <header className=" relative h-56 w-full overflow-hidden border-b border-gray-100 bg-gray-50 ">
        <div className="flex h-full items-center justify-center p-5">
          <img
            src={user.profile}
            alt={user.username}
            className="object-contain transition-transform duration-500 group-hover:scale-105 w-2xl"
          />
        </div>
        <div className="absolute right-3 top-3">
          <span
            className={clsx(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5",
              "text-xs font-medium backdrop-blur-sm",
              user.isActive
                ? "bg-green-50/95 text-green-600"
                : "bg-red-50/95 text-red-500",
            )}
          >
            {user.isActive ? (
              <>
                <FiEye size={14} /> فعال
              </>
            ) : (
              <>
                <FiEyeOff size={14} /> غیرفعال
              </>
            )}
          </span>
        </div>
      </header>
      <main className="flex flex-1 flex-col p-4">
        <div className="mb-2">
          <span className=" inline-flex rounded-lg bg-purple-50 px-2.5 py-1 text-[11px] font-medium text-purple-600 ">
            {user.username}
          </span>
        </div>
        <h2
          className="line-clamp-2 min-h-12 text-sm font-bold leading-6 text-gray-800"
          title={user.firstname}
        >
          {user.firstname} {user.lastname}
        </h2>
      </main>
      <footer className=" flex items-center justify-between border-t border-gray-100 bg-gray-50/70 px-4 py-3 ">
        {/* <div className="flex items-baseline gap-1">
          <span className="text-base font-black text-gray-800">
            {Number(user.price).toLocaleString("fa-IR")}
          </span>
          <span className="text-[11px] text-gray-400"> تومان </span>
        </div> */}
        <div className="flex items-center gap-1">
          <RemoveUserIcon
            user={user}
            handler={removeUser}
            className="flex size-4 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-red-50 hover:text-red-600 active:scale-90"
          />
          <ChangeVisibilityIcon
            user={user}
            handler={changeUserVisibility}
            className="flex size-4 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-purple-50 hover:text-purple-600 active:scale-90"
          />
          <EditUserIcon
            user={user}
            handler={editUser}
            className="flex size-4 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:scale-90"
          />
        </div>
      </footer>
    </article>
  );
};

export default UsersCard;
