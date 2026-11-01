import Modal from "../../../components/common/Modal/Modal";
import clsx from "clsx";
import { FiEye } from "react-icons/fi";

const ChangeVisibilityIcon = ({ product, handler, className }) => {
  const Trigger = () => (
    <button>
      <FiEye className={className} />
    </button>
  );

  return (
    <Modal
      title="تغییر وضعیت انتشار"
      Trigger={<Trigger />}
      onSubmit={() => handler(product.id)}
    >
      <div className="flex items-center justify-center">
        <p>
          آیا از{" "}
          <span
            className={clsx(
              product.isPublished ? "text-blue-500" : "text-green-500",
            )}
          >
            {" "}
            <strong>{product.isPublished ? "خصوصی" : "عمومی"}</strong>
          </span>{" "}
          کردن{" "}
          <kbd className="px-2 py-1 rounded-md bg-red-500/15 font-black! text-red-500">
            {product.title}
          </kbd>{" "}
          اطمینان دارید؟
        </p>
      </div>
    </Modal>
  );
};

export default ChangeVisibilityIcon;
