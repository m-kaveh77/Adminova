import { BiMessageSquareDetail } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";
import { FiBox, FiUsers } from "react-icons/fi";

const generateSummaries = ({
  productsLength = 0,
  usersength = 0,
  ticketsLength = 0,
  commentsLength = 0,
}) => {
  return [
    {
      id: 1,
      title: "تعداد محصولات",
      value: productsLength,
      Icon: FiBox,
    },
    {
      id: 2,
      title: "تعداد کاربران",
      value: usersength,
      Icon: FiUsers,
    },
    {
      id: 3,
      title: "تعداد تیکت‌ها",
      value: ticketsLength,
      Icon: FaRegComments,
    },
    {
      id: 4,
      title: "تعداد کامنت‌ها",
      value: commentsLength,
      Icon: BiMessageSquareDetail,
    },
  ];
};

const generateChartData = ({
  productsLength = 0,
  usersength = 0,
  ticketsLength = 0,
  commentsLength = 0,
}) => {
  return [
    {
      name: "تعداد محصولات",
      value: productsLength,
    },
    {
      name: "تعداد کاربران",
      value: usersength,
    },
    {
      name: "تعداد تیکت‌ها",
      value: ticketsLength,
    },
    {
      name: "تعداد کامنت‌ها",
      value: commentsLength,
    },
  ];
};

export { generateSummaries, generateChartData };
