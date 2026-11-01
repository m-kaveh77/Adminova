import Table from "../../components/common/Table/Table";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import TableBody from "../../components/common/Table/elements/TableBody";
import TableRow from "../../components/common/Table/elements/TableRow";
import TableCell from "../../components/common/Table/elements/TableCell";
import {
  ticketDetails,
  ticketsAllTableHeadRow,
  ticketsTableColumns,
} from "../../data/tickets";
import ChangeVisibilityIcon from "./components/ChangeVisibilityIcon";
import EditTicketIcon from "./components/EditTicketIcon";

const TicketsTableView = ({
  tickets = [],
  paginatedtickets = [],
  setTickets,
  changeUserVisibility,
  editTicket,
}) => {
  return (
    <Table
      header={{
        title: "لیست تیکت‌ها",
      }}
      columns={ticketsTableColumns}
      pagination={{
        items: tickets,
        setItems: setTickets,
        itemsPerPage: 5,
      }}
    >
      <TableHead>
        {ticketsAllTableHeadRow.map((column) => (
          <TableHeadCell key={column}>{column}</TableHeadCell>
        ))}
      </TableHead>

      <TableBody>
        {paginatedtickets.length > 0 ? (
          paginatedtickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>
                <span className="font-medium text-gray-500">{ticket.id}</span>
              </TableCell>

              <TableCell>
                <span className="whitespace-nowrap font-semibold text-gray-800">
                  {ticket.code}
                </span>
              </TableCell>

              <TableCell>
                <span className="whitespace-nowrap font-semibold text-gray-800">
                  {ticket.title}
                </span>
              </TableCell>

              <TableCell>
                <span className="whitespace-nowrap font-semibold text-gray-800">
                  {ticket.department.label}
                </span>
              </TableCell>

              <TableCell>
                <span className="whitespace-nowrap font-semibold text-gray-800">
                  {ticket.date}
                </span>
              </TableCell>

              <TableCell>
                <span className="whitespace-nowrap inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  {ticket.state.label}
                </span>
              </TableCell>

              <TableCell>
                <div className="flex items-center justify-start gap-3 whitespace-nowrap">
                  <ChangeVisibilityIcon
                    ticket={ticket}
                    handler={changeUserVisibility}
                    className="flex size-5 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-purple-50 hover:text-purple-600 active:scale-90"
                  />
                  <EditTicketIcon
                    ticket={ticket}
                    details={ticketDetails.filter(
                      (detail) => detail.ticketId === ticket.id,
                    )}
                    handler={editTicket}
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

export default TicketsTableView;
