import { FiUsers } from "react-icons/fi";

import users from "../../data/users";
import CardTitle from "../../components/common/Card/CardTitle";
import LastUserCard from "./components/LastUserCard";
import CardFooter from "../../components/common/Card/CardFooter";

const LastUsers = () => {
  const latestUsers = [...users].sort((a, b) => b.id - a.id).slice(0, 5);

  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-100 p-5">
        <CardTitle title="آخرین کاربران" subTitle="جدیدترین کاربران ثبت شده" />

        <div className="flex size-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
          <FiUsers size={21} />
        </div>
      </div>

      <div className="divide-y divide-gray-100 cursor-pointer">
        {latestUsers.map((user) => (
          <LastUserCard key={user.id} {...user} />
        ))}
      </div>

      <CardFooter title="مشاهده همه کاربران" link="/users" />
    </section>
  );
};

export default LastUsers;
