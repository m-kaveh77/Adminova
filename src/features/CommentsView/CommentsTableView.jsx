import Table from "../../components/common/Table/Table";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import TableBody from "../../components/common/Table/elements/TableBody";
import TableRow from "../../components/common/Table/elements/TableRow";
import TableCell from "../../components/common/Table/elements/TableCell";
import {
  commentsAllTableHeadRow,
  commentsTableColumns,
} from "../../data/comments";
import { convertDateToPersianDate } from "../../utils/date";
import RemoveCommentIcon from "./components/RemoveCommentIcon";
import AcceptCommentIcon from "./components/AcceptCommentIcon";

const CommentsTableView = ({
  comments = [],
  paginatedComments = [],
  setComments,
  removeComment,
  acceptComment,
  products = [],
  users = [],
}) => {
  return (
    <Table
      header={{
        title: "لیست نظرات",
      }}
      columns={commentsTableColumns}
      pagination={{
        items: comments,
        setItems: setComments,
        itemsPerPage: 5,
      }}
    >
      <TableHead>
        {commentsAllTableHeadRow.map((column) => (
          <TableHeadCell key={column}>{column}</TableHeadCell>
        ))}
      </TableHead>

      <TableBody>
        {paginatedComments.length > 0 ? (
          paginatedComments.map((comment) => {
            const product = products.find(
              (item) => item.id === comment.productId,
            );

            const user = users.find((item) => item.id === comment.userId);

            return (
              <TableRow key={comment.id}>
                <TableCell>
                  <span className="font-medium text-gray-500">
                    {comment.id}
                  </span>
                </TableCell>

                <TableCell>
                  <span className="whitespace-nowrap font-semibold text-gray-800">
                    {product?.title ?? "محصول نامشخص"}
                  </span>
                </TableCell>

                <TableCell>
                  <span className="whitespace-nowrap font-semibold text-gray-800">
                    {user
                      ? `${user.firstname} ${user.lastname}`
                      : "کاربر نامشخص"}
                  </span>
                </TableCell>

                <TableCell>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    {comment.state.label}
                  </span>
                </TableCell>

                <TableCell>
                  <span className="whitespace-nowrap font-semibold text-gray-800">
                    {convertDateToPersianDate(comment.date)}
                  </span>
                </TableCell>

                <TableCell>
                  <span className="whitespace-nowrap font-semibold text-gray-800">
                    {comment.text}
                  </span>
                </TableCell>

                <TableCell>
                  <div className="flex items-center justify-start gap-3 whitespace-nowrap">
                    <RemoveCommentIcon
                      comment={comment}
                      handler={removeComment}
                      className="flex size-5 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-red-50 hover:text-red-600 active:scale-90"
                    />
                    <AcceptCommentIcon
                      comment={comment}
                      handler={acceptComment}
                      className="flex size-5 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:scale-90"
                    />
                  </div>
                </TableCell>
              </TableRow>
            );
          })
        ) : (
          <TableRow>
            <TableCell>
              <p className="py-5 text-center text-sm text-gray-400">
                نظری برای نمایش وجود ندارد.
              </p>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default CommentsTableView;
