export const convertDateToPersianDate = (date) => {
  if (!date) return "-";

  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(date));
};
