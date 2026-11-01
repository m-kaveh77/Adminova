import { useState } from "react";
import { FiMessageSquare, FiSend } from "react-icons/fi";
import Modal from "../../../components/common/Modal/Modal";

const EditTicketIcon = ({ ticket, details = [], handler, className = "" }) => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const hasMessages = (ticket.messages || []).length > 0;

  if (ticket.state.value !== "RPOGRESSING" && !hasMessages) {
    return null;
  }

  const messages = [
    ...details.map((detail) => ({
      id: `user-${detail.id}`,
      sender: "USER",
      text: detail.description,
      date: detail.date,
    })),
    ...(ticket.messages || []),
  ];

  const handleSend = () => {
    if (!answer.trim()) {
      setError("لطفاً متن پاسخ را وارد کنید.");
      return;
    }

    handler({
      id: ticket.id,
      answer: answer.trim(),
    });

    setAnswer("");
    setError("");
  };

  const Trigger = (
    <button
      type="button"
      title="پاسخ به تیکت"
      aria-label={`پاسخ به تیکت ${ticket.code}`}
    >
      <FiMessageSquare className={className} />
    </button>
  );

  return (
    <Modal title={`گفت‌وگوی تیکت ${ticket.code}`} Trigger={Trigger}>
      <div className="flex flex-col gap-4">
        <div className="rounded-xl bg-purple-50 p-4">
          <span className="text-xs text-gray-500">عنوان تیکت</span>
          <h3 className="mt-1 font-semibold text-gray-800">{ticket.title}</h3>
        </div>

        <div className="flex max-h-87.5 min-h-55 flex-col gap-4 overflow-y-auto rounded-xl bg-gray-50 p-4">
          {messages.length > 0 ? (
            messages.map((message) => {
              const isAdmin = message.sender === "ADMIN";

              return (
                <div
                  key={message.id}
                  className={`flex w-full ${
                    isAdmin ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 shadow-sm ${
                      isAdmin
                        ? "rounded-tl-sm border border-gray-100 bg-white"
                        : "rounded-tr-sm bg-purple-100"
                    }`}
                  >
                    <div className="mb-2 flex items-center justify-between gap-5">
                      <span
                        className={`text-xs font-bold ${
                          isAdmin ? "text-purple-600" : "text-gray-700"
                        }`}
                      >
                        {isAdmin ? "پشتیبانی" : "کاربر"}
                      </span>

                      <span className="text-[10px] text-gray-400">
                        {message.date}
                      </span>
                    </div>

                    <p className="whitespace-pre-wrap text-sm leading-7 text-gray-700">
                      {message.text}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="m-auto text-sm text-gray-400">
              هنوز پیامی برای این تیکت ثبت نشده است.
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            پاسخ شما
          </label>

          <textarea
            value={answer}
            onChange={(event) => {
              setAnswer(event.target.value);
              if (error) setError("");
            }}
            rows={3}
            placeholder="پاسخ خود را بنویسید..."
            className={`w-full resize-none rounded-xl border bg-white p-3 text-sm outline-none transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-purple-100 ${
              error
                ? "border-red-500"
                : "border-gray-200 focus:border-purple-500"
            }`}
          />

          {error && <p className="mt-2 text-xs text-red-500">{error}</p>}

          <div className="mt-3 flex justify-end">
            <button
              type="button"
              onClick={handleSend}
              disabled={!answer.trim()}
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FiSend size={16} />
              ارسال پاسخ
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditTicketIcon;
