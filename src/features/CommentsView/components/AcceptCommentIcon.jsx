import { FiCheckCircle } from "react-icons/fi";
import Modal from "../../../components/common/Modal/Modal";

const AcceptCommentIcon = ({ comment, handler, className = "" }) => {
  if (comment.state.value !== "RPOGRESSING") {
    return null;
  }

  const Trigger = (
    <button
      type="button"
      title="تایید نظر"
      aria-label={`تایید نظر ${comment.id}`}
    >
      <FiCheckCircle className={className} />
    </button>
  );

  return (
    <Modal
      title="تایید نظر"
      Trigger={Trigger}
      onSubmit={() => handler(comment.id)}
    >
      <div className="flex items-center justify-center">
        <p className="text-sm leading-7 text-gray-600">
          آیا از تایید نظر زیر اطمینان دارید؟
          <span className="mx-2 inline-block rounded-md bg-red-50 px-2 py-1 font-bold text-red-600">
            {comment.id}
          </span>
        </p>
      </div>
    </Modal>
  );
};

export default AcceptCommentIcon;
