import Modal from "../../../components/common/Modal/Modal";
import { FiTrash2 } from "react-icons/fi";

const RemoveProductIcon = ({ product, handler, className }) => {
  const Trigger = () => (
    <button>
      <FiTrash2 className={className} />
    </button>
  );

  return (
    <Modal
      title="حذف محصول"
      Trigger={<Trigger />}
      onSubmit={() => handler(product.id)}
    >
      <div className="flex items-center justify-center">
        آیا از حذف محصول
        <kbd className="px-2 py-1 rounded-md bg-red-500/15 font-black! text-red-500">
          {product.title}
        </kbd>
        اطمینان دارید؟
      </div>
    </Modal>
  );
};

export default RemoveProductIcon;
