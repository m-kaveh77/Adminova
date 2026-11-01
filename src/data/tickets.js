export const ticketDepartment = [
  {
    label: "مالی",
    value: "FINANCE",
  },
  {
    label: "پشتیبانی سایت",
    value: "SUPPORT",
  },
  {
    label: "مشاوره خرید",
    value: "BUY",
  },
];

export const ticketState = [
  {
    label: "در حال بررسی",
    value: "RPOGRESSING",
  },
  {
    label: "پاسخ داده شده",
    value: "ANSWERED",
  },
  {
    label: "بسته شده",
    value: "CLOSED",
  },
];

export const ticketsAllTableHeadRow = [
  "شناسه",
  "کد",
  "عنوان تیکت",
  "بخش",
  "تاریخ ثبت",
  "وضعیت",
];

export const ticketsTableColumns = [
  "70px",
  "300px",
  "500px",
  "200px",
  "200px",
  "200px",
  "200px",
];

export const tickets = [
  {
    id: 1,
    code: "1001",
    title: "اتمام موجودی",
    department: ticketDepartment[0],
    date: "2026-10-29",
    state: ticketState[0],
  },
  {
    id: 2,
    code: "1002",
    title: "مشکل در لود تصاویر محصولات",
    department: ticketDepartment[0],
    date: "2026-10-29",
    state: ticketState[1],
  },
  {
    id: 3,
    code: "1003",
    title: "خطا ردر هنگام ثبت کاربر",
    department: ticketDepartment[1],
    date: "2026-10-29",
    state: ticketState[0],
  },
  {
    id: 4,
    code: "1004",
    title: "صفحه بندی محصولات",
    department: ticketDepartment[1],
    date: "2026-10-29",
    state: ticketState[0],
  },
  {
    id: 5,
    code: "1005",
    title: "عدم نمایش چارت در صفحه اصلی",
    department: ticketDepartment[0],
    date: "2026-10-29",
    state: ticketState[2],
  },
  {
    id: 6,
    code: "1006",
    title: "دیر جواب  دادن تیکت‌ها",
    department: ticketDepartment[0],
    date: "2026-10-29",
    state: ticketState[0],
  },
  {
    id: 7,
    code: "1007",
    title: "راه اندازی خرید اینترنتی",
    department: ticketDepartment[2],
    date: "2026-10-29",
    state: ticketState[2],
  },
  {
    id: 8,
    code: "1008",
    title: "وصل نشدن درگاه پرداخت",
    department: ticketDepartment[1],
    date: "2026-10-29",
    state: ticketState[0],
  },
];

export const ticketDetails = [
  {
    id: 1,
    ticketId: 1,
    userId: 1,
    date: "2026-10-10",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    id: 2,
    ticketId: 2,
    userId: 2,
    date: "2026-10-20",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    id: 3,
    ticketId: 3,
    userId: 3,
    date: "2026-10-30",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
];
