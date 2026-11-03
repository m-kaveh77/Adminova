import { FiTrash2 } from "react-icons/fi";
import Modal from "../../../components/common/Modal/Modal";

const RemoveCommentIcon = ({ comment, handler, className }) => {
  const Trigger = () => (
    <button>
      <FiTrash2 className={className} />
    </button>
  );

  return (
    <Modal
      title="حذف نظر"
      Trigger={<Trigger />}
      onSubmit={() => handler(comment.id)}
    >
      <div className="flex items-center justify-center">
        آیا از حذف نظر
        <kbd className="px-2 py-1 rounded-md bg-red-500/15 font-black! text-red-500">
          {comment.text}
        </kbd>
        اطمینان دارید؟
      </div>
    </Modal>
  );
};

export default RemoveCommentIcon;
