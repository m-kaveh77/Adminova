const ModalFooter = ({ onClose, onSubmit }) => {
  const submitHandler = () => {
    onSubmit?.();
    onClose();
  };

  return (
    <div className="flex items-center justify-end gap-2 text-sm select-none">
      {/* Cancel */}
      <button
        type="button"
        onClick={onClose}
        className="
          rounded-xl
          border border-gray-200
          bg-white
          px-4 py-2.5
          font-medium text-gray-600
          transition-all duration-200
          hover:bg-gray-50
          hover:text-gray-800
          cursor-pointer
        "
      >
        انصراف
      </button>

      {/* Submit */}
      <button
        type="button"
        onClick={submitHandler}
        className="
          rounded-xl
          bg-purple-600
          px-5 py-2.5
          font-medium text-white
          shadow-sm
          transition-all duration-200
          hover:bg-purple-700
          active:scale-[0.98]
          cursor-pointer
        "
      >
        تایید
      </button>
    </div>
  );
};

export default ModalFooter;
