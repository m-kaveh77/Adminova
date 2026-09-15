import { createBrowserRouter } from "react-router";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Home from "./pages/Home/page";
import Products from "./pages/Products/page";
import Users from "./pages/Users/page";
import Tickets from "./pages/Tickets/page";
import TicketDetails from "./pages/TicketDetails/page";
import Comments from "./pages/Comments/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <DashboardLayout />
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
      {
        path: "tickets/:ticketId",
        element: <TicketDetails />,
      },
      {
        path: "comments",
        element: <Comments />,
      },
    ],
  },
]);

export default router;
