import { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import Modal from "../../../components/common/Modal/Modal";
import AddUserFields from "./AddUserFields";

const EditUserIcon = ({ user, handler, className = "" }) => {
  const [formData, setFormData] = useState({
    ...user,
  });

  useEffect(() => {
    setFormData({ ...user });
  }, [user]);

  const handleChange = (updatedData) => {
    setFormData(updatedData);
  };

  const handleSubmit = () => {
    handler(formData);
  };

  const Trigger = (
    <button
      type="button"
      aria-label={`ویرایش ${user.username}`}
      title="ویرایش کاربر"
    >
      <FiEdit2 className={className} size={17} />
    </button>
  );

  return (
    <Modal title="ویرایش کاربر" Trigger={Trigger} onSubmit={handleSubmit}>
      <AddUserFields newUser={formData} onChange={handleChange} />
    </Modal>
  );
};

export default EditUserIcon;
