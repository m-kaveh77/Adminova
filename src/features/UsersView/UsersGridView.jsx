import Pagination from "../../components/common/Pagination";
import UsersCard from "./UsersCard";

const UsersGridView = ({
  users,
  paginatedUsers,
  setUsers,
  removeUser,
  changeUserVisibility,
  editUser,
}) => {
  return (
    <div className="mb-20">
      <div
        className="
          grid grid-cols-1 gap-5
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
        "
      >
        {paginatedUsers.map((user) => (
          <UsersCard
            key={user.id}
            user={user}
            removeUser={removeUser}
            changeUserVisibility={changeUserVisibility}
            editUser={editUser}
          />
        ))}
      </div>

      <Pagination items={users} setItems={setUsers} itemsPerPage={5} />
    </div>
  );
};

export default UsersGridView;
