import SectionTitle from "../../components/common/SectionTitle";
import TicketsTableView from "../../features/TicketsView/TicketsTableView";
import useTitle from "../../hooks/useTitle";
import { tickets as initialTickets, ticketState } from "../../data/tickets";
import { useState } from "react";

const Tickets = () => {
  useTitle("ادمینوا - تیکت‌ها");

  const [paginatedTickets, setPaginatedTickets] = useState([]);

  const [allTickets, setAllTickets] = useState(() =>
    initialTickets.map((ticket) => ({
      ...ticket,
    })),
  );

  const changeUserVisibility = (ticketId) => {
    setAllTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, state: ticketState[2] } : ticket,
      ),
    );
  };

  const answerTicket = ({ id, answer }) => {
    setAllTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id
          ? {
              ...ticket,
              messages: [
                ...(ticket.messages || []),
                {
                  id: Date.now(),
                  sender: "ADMIN",
                  text: answer,
                  date: new Date().toISOString().slice(0, 10),
                },
              ],
              state: ticketState[1],
            }
          : ticket,
      ),
    );
  };

  return (
    <>
      <SectionTitle title="کاربران" />

      <section className="mt-6 w-full">
        <TicketsTableView
          tickets={allTickets}
          paginatedtickets={paginatedTickets}
          setTickets={setPaginatedTickets}
          changeUserVisibility={changeUserVisibility}
          editTicket={answerTicket}
        />
      </section>
    </>
  );
};

export default Tickets;
