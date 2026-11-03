export const commentsAllTableHeadRow = [
  "شناسه",
  "محصول",
  "کاربر",
  "وضعیت",
  "تاریخ ثبت نظر",
  "متن",
  "عملیات",
];

export const commentState = [
  {
    label: "در حال بررسی",
    value: "RPOGRESSING",
  },
  {
    label: "تایید شده",
    value: "ACCEPTED",
  },
  {
    label: "بسته شده",
    value: "BLOCKED",
  },
];

export const commentsTableColumns = [
  "70px",
  "250px",
  "250px",
  "200px",
  "200px",
  "600px",
  "100px",
];

export const comments = [
  {
    id: 1,
    productId: 1,
    userId: 1,
    state: commentState[0],
    date: "2026-11-01",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    id: 2,
    productId: 2,
    userId: 2,
    state: commentState[2],
    date: "2026-11-02",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    id: 3,
    productId: 3,
    userId: 3,
    state: commentState[0],
    date: "2026-11-03",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    id: 4,
    productId: 4,
    userId: 4,
    state: commentState[0],
    date: "2026-11-04",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    id: 5,
    productId: 5,
    userId: 5,
    state: commentState[2],
    date: "2026-11-05",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    id: 6,
    productId: 6,
    userId: 6,
    state: commentState[0],
    date: "2026-11-06",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
];
