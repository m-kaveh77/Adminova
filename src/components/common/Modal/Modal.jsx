import { useEffect } from "react";
import clsx from "clsx";
import { BiX } from "react-icons/bi";

import ModalFooter from "./ModalFooter";
import useToggle from "../../../hooks/useToggle";

const Modal = ({
  Trigger,
  children,
  title,
  onSubmit,
  showFooter = true,
  closeOnOverlayClick = true,
}) => {
  const [isOpen, toggle] = useToggle(false);

  // Close modal with Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        toggle();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, toggle]);

  // Prevent page scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOverlayClick = (event) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      toggle();
    }
  };

  return (
    <>
      {/* Trigger */}
      {Trigger && (
        <div className="min-w-max cursor-pointer" onClick={toggle}>
          {Trigger}
        </div>
      )}

      {/* Overlay */}
      <div
        id="modal-screen"
        onMouseDown={handleOverlayClick}
        className={clsx(
          "fixed inset-0 z-50 flex items-center justify-center",
          "bg-black/40 p-4 backdrop-blur-[2px]",
          "transition-all duration-300",
          isOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        {/* Modal */}
        <div
          className={clsx(
            "w-full max-w-xl overflow-hidden rounded-2xl bg-white",
            "shadow-2xl",
            "transition-all duration-300",
            isOpen ? "translate-y-0 scale-100" : "translate-y-4 scale-95",
          )}
          onMouseDown={(event) => event.stopPropagation()}
        >
          {/* Header */}
          <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5">
            <div className="min-w-0">
              <h2 className="truncate text-base font-bold text-gray-800">
                {title}
              </h2>
            </div>

            <button
              type="button"
              onClick={toggle}
              aria-label="بستن"
              className="
                flex size-9 shrink-0 items-center justify-center
                rounded-lg
                text-gray-400
                transition-all duration-200
                hover:bg-gray-100
                hover:text-gray-700
                cursor-pointer
              "
            >
              <BiX size={24} />
            </button>
          </div>

          {/* Content */}
          <div
            id="modal-content"
            className="
              max-h-[calc(90vh-8rem)]
              overflow-y-auto
              px-5 py-6
            "
          >
            {children}
          </div>

          {/* Footer */}
          {showFooter && (
            <div className="border-t border-gray-100 bg-gray-50 px-5 py-4">
              <ModalFooter onSubmit={onSubmit} onClose={toggle} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
