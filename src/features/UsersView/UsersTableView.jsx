import { usersAllTableHeadRow, usersTableColumns } from "../../data/users";

import Table from "../../components/common/Table/Table";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import TableBody from "../../components/common/Table/elements/TableBody";
import TableRow from "../../components/common/Table/elements/TableRow";
import TableCell from "../../components/common/Table/elements/TableCell";
import { FiPackage } from "react-icons/fi";
import RemoveUserIcon from "./components/RemoveUserIcon";
import ChangeVisibilityIcon from "./components/ChangeVisibilityIcon";
import EditUserIcon from "./components/EditUserIcon";

const UsersTableView = ({
  users = [],
  paginatedUsers = [],
  setUsers,
  removeUser,
  changeUserVisibility,
  editUser,
}) => {
  return (
    <Table
      header={{
        title: "لیست کاربران",
      }}
      columns={usersTableColumns}
      pagination={{
        items: users,
        setItems: setUsers,
        itemsPerPage: 5,
      }}
    >
      <TableHead>
        {usersAllTableHeadRow.map((column) => (
          <TableHeadCell key={column}>{column}</TableHeadCell>
        ))}
      </TableHead>

      <TableBody>
        {paginatedUsers.length > 0 ? (
          paginatedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <span className="font-medium text-gray-500">{user.id}</span>
              </TableCell>

              <TableCell>
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-gray-50 p-1">
                    {user.profile ? (
                      <img
                        src={user.profile}
                        alt={user.username}
                        loading="lazy"
                        className="size-full object-contain"
                      />
                    ) : (
                      <FiPackage size={18} className="text-gray-400" />
                    )}
                  </div>

                  <span
                    className="truncate font-medium text-gray-700"
                    title={user.username}
                  >
                    {user.username}
                  </span>
                </div>
              </TableCell>

              <TableCell>
                <span className="whitespace-nowrap font-semibold text-gray-800">
                  {user.firstname}
                </span>
              </TableCell>

              <TableCell>
                <span className="whitespace-nowrap font-semibold text-gray-800">
                  {user.lastname}
                </span>
              </TableCell>

              <TableCell>
                <span className="whitespace-nowrap inline-flex items-center gap-1.5rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  {user.role.label}
                </span>
              </TableCell>

              <TableCell>
                <span className="whitespace-nowrap font-semibold text-gray-800">
                  {user.phone}
                </span>
              </TableCell>

              <TableCell>
                <span className="whitespace-nowrap font-semibold text-gray-800">
                  {user.email}
                </span>
              </TableCell>

              <TableCell>
                <span
                  className={
                    user.isActive
                      ? "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
                      : "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700"
                  }
                >
                  <span
                    className={
                      user.isActive
                        ? "size-1.5 rounded-full bg-emerald-500"
                        : "size-1.5 rounded-full bg-rose-500"
                    }
                  />
                  {user.isActive ? "فعال" : "غیرفعال"}
                </span>
              </TableCell>

              <TableCell>
                <div className="flex items-center justify-start gap-3 whitespace-nowrap">
                  <RemoveUserIcon
                    user={user}
                    handler={removeUser}
                    className="flex size-5 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-red-50 hover:text-red-600 active:scale-90"
                  />
                  <ChangeVisibilityIcon
                    user={user}
                    handler={changeUserVisibility}
                    className="flex size-5 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-purple-50 hover:text-purple-600 active:scale-90"
                  />
                  <EditUserIcon
                    user={user}
                    handler={editUser}
                    className="flex size-5 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:scale-90"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell>
              <p className="py-5 text-center text-sm text-gray-400">
                محصولی برای نمایش وجود ندارد.
              </p>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default UsersTableView;
