import { FiTrash2 } from "react-icons/fi";
import Modal from "../../../components/common/Modal/Modal";

const RemoveUserIcon = ({ user, handler, className }) => {
  const Trigger = () => (
    <button>
      <FiTrash2 className={className} />
    </button>
  );

  return (
    <Modal
      title="حذف کاربر"
      Trigger={<Trigger />}
      onSubmit={() => handler(user.id)}
    >
      <div className="flex items-center justify-center">
        آیا از حذف کاربر
        <kbd className="px-2 py-1 rounded-md bg-red-500/15 font-black! text-red-500">
          {user.username}
        </kbd>
        اطمینان دارید؟
      </div>
    </Modal>
  );
};

export default RemoveUserIcon;
