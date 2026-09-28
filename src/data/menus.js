import { BiMessageSquareDetail } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";
import { FiBox, FiHome, FiLogOut, FiUsers } from "react-icons/fi";

export default [
  {
    id: 1,
    href: "/",
    title: "داشبورد",
    icon: FiHome,
  },
  {
    id: 2,
    href: "/products",
    title: "محصولات",
    icon: FiBox,
  },
  {
    id: 3,
    href: "/users",
    title: "کاربران",
    icon: FiUsers,
  },
  {
    id: 4,
    href: "/tickets",
    title: "تیکت‌ها",
    icon: FaRegComments,
  },
  {
    id: 5,
    href: "/comments",
    title: "کامنت‌ها",
    icon: BiMessageSquareDetail,
  },
];
