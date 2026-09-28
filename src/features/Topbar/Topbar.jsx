import SearchInput from "./components/SearchInput";
import Notifications from "./components/Notifications";
import Divider from "./components/Divider";
import Profile from "./components/Profile";

const Topbar = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">
      <div>
        <SearchInput />
      </div>

      <div className="flex items-center gap-5">
        <Notifications />
        <Divider />
        <Profile />
      </div>
    </header>
  );
};

export default Topbar;
