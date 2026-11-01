import { FiEyeOff } from "react-icons/fi";
import Modal from "../../../components/common/Modal/Modal";

const ChangeVisibilityIcon = ({ ticket, handler, className }) => {
  if (ticket.state.value === "CLOSED") {
    return null;
  }

  const Trigger = (
    <button
      type="button"
      title="بستن تیکت"
      aria-label={`بستن تیکت ${ticket.code}`}
    >
      <FiEyeOff className={className} />
    </button>
  );

  return (
    <Modal
      title="بستن تیکت"
      Trigger={Trigger}
      onSubmit={() => handler(ticket.id)}
    >
      <div className="flex items-center justify-center">
        <p className="text-sm leading-7 text-gray-600">
          آیا از بستن تیکت زیر اطمینان دارید؟
          <span className="mx-2 inline-block rounded-md bg-red-50 px-2 py-1 font-bold text-red-600">
            {ticket.code} - {ticket.title}
          </span>
        </p>
      </div>
    </Modal>
  );
};

export default ChangeVisibilityIcon;
