export const userRoles = [
  {
    label: "کاربر",
    value: "USER",
  },
  {
    label: "مدیر",
    value: "ADMIN",
  },
  {
    label: "پشتیبانی",
    value: "SUPPORT",
  },
];

export const usersAllTableHeadRow = [
  "شناسه",
  "نام کاربری",
  "نام",
  "نام خانوادگی",
  "نقش",
  "تلفن",
  "ایمیل",
  "فعال/غیرفعال",
];

export const usersTableColumns = [
  "70px", // شناسه
  "minmax(150px, 1.5fr)", // نام کاربری و تصویر
  "minmax(100px, 1fr)", // نام
  "minmax(100px, 1fr)", // نام خانوادگی
  "110px", // نقش
  "minmax(130px, 1.2fr)", // تلفن
  "minmax(180px, 1.5fr)", // ایمیل
  "minmax(100px, 1.5fr)", // وضعیت
  "150px", // عملیات
];

export const users = [
  {
    id: 1,
    username: "johnd",
    firstname: "جهان",
    lastname: "محمدی",
    phone: "09125634479",
    email: "john@gmail.com",
    role: userRoles[2],
    profile: "/images/profile-avatar.jpg",
    isActive: true,
  },
  {
    id: 2,
    username: "mor_2314",
    firstname: "مرتضی",
    lastname: "رستگاری",
    phone: "09125634479",
    email: "morrison@gmail.com",
    role: userRoles[1],
    profile: "/images/profile-avatar.jpg",
    isActive: true,
  },
  {
    id: 3,
    username: "kevinryan",
    firstname: "کاویان",
    lastname: "رحیمی",
    phone: "09125634479",
    email: "kevin@gmail.com",
    role: userRoles[0],
    profile: "/images/profile-avatar.jpg",
    isActive: true,
  },
  {
    id: 4,
    username: "donero",
    firstname: "دریا",
    lastname: "ریاضی",
    phone: "09125634479",
    email: "don@gmail.com",
    role: userRoles[0],
    profile: "/images/profile-avatar.jpg",
    isActive: true,
  },
  {
    id: 5,
    username: "derek",
    firstname: "معصومه",
    lastname: "عزیزی",
    phone: "09125634479",
    email: "derek@gmail.com",
    role: userRoles[1],
    profile: "/images/profile-avatar.jpg",
    isActive: true,
  },
  {
    id: 6,
    username: "david_r",
    firstname: "مصطفی",
    lastname: "رسولی",
    phone: "09125634479",
    email: "david_r@gmail.com",
    role: userRoles[0],
    profile: "/images/profile-avatar.jpg",
    isActive: true,
  },
  {
    id: 7,
    username: "snyder",
    firstname: "مریم",
    lastname: "صدری",
    phone: "09125634479",
    email: "miriam@gmail.com",
    role: userRoles[0],
    profile: "/images/profile-avatar.jpg",
    isActive: true,
  },
  {
    id: 8,
    username: "hopkins",
    firstname: "ویلیام",
    lastname: "جزینی",
    phone: "09125634479",
    email: "william@gmail.com",
    role: userRoles[2],
    profile: "/images/profile-avatar.jpg",
    isActive: true,
  },
  {
    id: 9,
    username: "kate_h",
    firstname: "مسعود",
    lastname: "سلطانی",
    phone: "09125634479",
    email: "kate@gmail.com",
    role: userRoles[2],
    profile: "/images/profile-avatar.jpg",
    isActive: true,
  },
  {
    id: 10,
    username: "jimmie_k",
    firstname: "مرضیه",
    lastname: "مسعودی",
    phone: "09125634479",
    email: "jimmie@gmail.com",
    role: userRoles[0],
    profile: "/images/profile-avatar.jpg",
    isActive: true,
  },
];

export default users;
