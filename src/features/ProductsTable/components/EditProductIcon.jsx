import { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";

import Modal from "../../../components/common/Modal/Modal";
import AddProductFields from "./AddProductFields";

const EditProductIcon = ({ product, handler, className = "" }) => {
  const [formData, setFormData] = useState({
    ...product,
  });

  useEffect(() => {
    setFormData({ ...product });
  }, [product]);

  const handleChange = (updatedData) => {
    setFormData(updatedData);
  };

  const handleSubmit = () => {
    handler(formData);
  };

  const Trigger = (
    <button
      type="button"
      aria-label={`ویرایش ${product.title}`}
      title="ویرایش محصول"
      className="flex size-9 items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:scale-90"
    >
      <FiEdit2 className={className} size={17} />
    </button>
  );

  return (
    <Modal title="ویرایش محصول" Trigger={Trigger} onSubmit={handleSubmit}>
      <AddProductFields newProduct={formData} onChange={handleChange} />
    </Modal>
  );
};

export default EditProductIcon;
