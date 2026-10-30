import { CiGrid41, CiViewTable } from "react-icons/ci";
import Modal from "../../components/common/Modal/Modal";
import SectionTitle from "../../components/common/SectionTitle";
import useTitle from "../../hooks/useTitle";
import useLocalStorage from "../../hooks/useLocalStorage";

import { users as initialUsers } from "../../data/users";
import { useState } from "react";
import UsersTableView from "../../features/UsersView/UsersTableView";
import UsersGridView from "../../features/UsersView/UsersGridView";
import AddUserFields from "../../features/UsersView/components/AddUserFields";

const Users = () => {
  useTitle("ادمینوا - کاربران");

  const [layoutType, setLayoutType] = useLocalStorage("layout", "TABLE");

  const [allUsers, setAllUsers] = useState(() =>
    initialUsers.map((user) => ({
      ...user,
      isActive: user.isActive ?? true,
    })),
  );

  const [paginatedUsers, setPaginatedUsers] = useState([]);

  const [newUser, setNewUser] = useState({
    username: "",
    firstname: "",
    lastname: "",
    role: "USER",
    phone: "",
    email: "",
    active: true,
  });

  const toggleLayout = () => {
    setLayoutType(layoutType === "TABLE" ? "GRID" : "TABLE");
  };

  const validateUser = (user) => {
    const errors = {};

    if (!user.username?.trim()) {
      errors.username = "وارد کردن نام کاربری الزامی است.";
    }

    if (!user.firstname?.trim()) {
      errors.firstname = "وارد کردن نام الزامی است.";
    }

    if (!user.lastname?.trim()) {
      errors.lastname = "وارد کردن نام خانوادگی الزامی است.";
    }

    if (!user.email?.trim()) {
      errors.email = "وارد کردن ایمیل الزامی است.";
    }

    return errors;
  };

  const createNewUser = () => {
    const user = {
      ...newUser,
      id: Math.max(0, ...allUsers.map((item) => item.id)) + 1,
    };

    setAllUsers((prev) => [...prev, user]);

    setNewUser({
      id: 0,
      username: "",
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      role: "",
      profile: "/images/profile-avatar.jpg",
      isActive: true,
    });
  };

  const editUser = (updatedUser) => {
    setAllUsers((prev) =>
      prev.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user,
      ),
    );
  };

  const removeUser = (userId) => {
    setAllUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  const changeUserVisibility = (userId) => {
    setAllUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, isActive: !user.isActive } : user,
      ),
    );
  };

  const Buttons = (
    <div className="mb-5 flex items-center justify-between gap-4">
      <div className="flex items-center rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
        <button
          type="button"
          onClick={toggleLayout}
          aria-label={layoutType === "TABLE" ? "نمایش کارتی" : "نمایش جدولی"}
          className="flex size-10 items-center justify-center rounded-lg text-xl text-gray-500 transition hover:bg-gray-100 hover:text-purple-600 active:scale-95 cursor-pointer"
        >
          {layoutType === "TABLE" ? <CiGrid41 /> : <CiViewTable />}
        </button>
      </div>

      <Modal
        title="ایجاد کاربر جدید"
        Trigger={
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-purple-700 active:scale-[0.98] cursor-pointer"
          >
            <span className="text-lg leading-none">+</span>
            <span>ایجاد کاربر</span>
          </button>
        }
        onSubmit={createNewUser}
      >
        <AddUserFields newUser={newUser} onChange={setNewUser} />
      </Modal>
    </div>
  );

  return (
    <>
      <SectionTitle title="کاربران" Buttons={Buttons} />

      <section className="mt-6 w-full">
        {layoutType === "TABLE" ? (
          <UsersTableView
            users={allUsers}
            paginatedUsers={paginatedUsers}
            setUsers={setPaginatedUsers}
            removeUser={removeUser}
            changeUserVisibility={changeUserVisibility}
            editUser={editUser}
          />
        ) : (
          <UsersGridView
            users={allUsers}
            paginatedUsers={paginatedUsers}
            setUsers={setPaginatedUsers}
            removeUser={removeUser}
            changeUserVisibility={changeUserVisibility}
            editUser={editUser}
          />
        )}
      </section>
    </>
  );
};

export default Users;
