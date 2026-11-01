import { FiEye } from "react-icons/fi";
import Modal from "../../../components/common/Modal/Modal";
import clsx from "clsx";

const ChangeVisibilityIcon = ({ user, handler, className }) => {
  const Trigger = () => (
    <button>
      <FiEye className={className} />
    </button>
  );

  return (
    <Modal
      title="تغییر وضعیت"
      Trigger={<Trigger />}
      onSubmit={() => handler(user.id)}
    >
      <div className="flex items-center justify-center">
        <p>
          آیا از{" "}
          <span
            className={clsx(user.isActive ? "text-blue-500" : "text-green-500")}
          >
            {" "}
            <strong>{user.isActive ? "غیرفعال" : "فعال"}</strong>
          </span>{" "}
          کردن{" "}
          <kbd className="px-2 py-1 rounded-md bg-red-500/15 font-black! text-red-500">
            {user.username}
          </kbd>{" "}
          اطمینان دارید؟
        </p>
      </div>
    </Modal>
  );
};

export default ChangeVisibilityIcon;
