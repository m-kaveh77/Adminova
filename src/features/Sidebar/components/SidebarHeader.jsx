import { Link } from "react-router";

const SidebarHeader = () => {
  return (
    <div className="pb-6 border-b border-zinc-200">
      <Link to="/" className="flex items-center gap-3">
        <img src="/images/logo.png" alt="logo" className="size-10" />
        <span>ادمینوا</span>
      </Link>
    </div>
  );
};

export default SidebarHeader;
