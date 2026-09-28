import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router";

const CardFooter = ({ title, link }) => {
  return (
    <div className="border-t border-gray-100 p-4">
      <Link
        to={link}
        className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-medium text-purple-600 transition-colors duration-200 hover:bg-purple-50"
      >
        {title}
        <FiArrowLeft size={16} />
      </Link>
    </div>
  );
};

export default CardFooter;
