import {
  FiUser,
  FiPhone,
  FiMail,
  FiShield,
  FiUserCheck,
  FiCamera,
  FiX,
} from "react-icons/fi";

const inputClassName =
  "h-11 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-3.5 text-sm text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100";

const labelClassName = "mb-2 block text-sm font-medium text-gray-700";

const AddUserFields = ({ newUser, onChange, errors = {}, onBlur }) => {
  const handleChange = (key, value) => {
    onChange({
      ...newUser,
      [key]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("لطفاً یک تصویر معتبر انتخاب کنید.");
      event.target.value = "";
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("حجم تصویر نباید بیشتر از ۲ مگابایت باشد.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      handleChange("profile", reader.result);
    };

    reader.readAsDataURL(file);
  };

  const renderError = (key) =>
    errors[key] && <p className="mt-1.5 text-xs text-red-500">{errors[key]}</p>;

  const getInputClass = (key) =>
    `${inputClassName} ${
      errors[key]
        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
        : ""
    }`;

  return (
    <div className="space-y-5">
      {/* تصویر پروفایل */}
      <div>
        <label className={labelClassName}>تصویر پروفایل</label>

        <div className="flex flex-col items-center gap-4 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 p-5 sm:flex-row">
          <div className="relative flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {newUser.profile ? (
              <img
                src={newUser.profile}
                alt="تصویر پروفایل کاربر"
                className="size-full object-cover"
              />
            ) : (
              <FiUser size={35} className="text-gray-300" />
            )}
          </div>

          <div className="flex flex-1 flex-col items-center gap-3 sm:items-start">
            <div className="text-center sm:text-right">
              <p className="text-sm font-medium text-gray-700">
                تصویر کاربر را انتخاب کنید
              </p>
              <p className="mt-1 text-xs text-gray-400">
                JPG، PNG و WEBP - حداکثر ۲ مگابایت
              </p>
            </div>

            <div className="flex items-center gap-2">
              <label
                htmlFor="user-profile"
                className="flex h-9 cursor-pointer items-center gap-2 rounded-lg bg-purple-600 px-4 text-xs font-medium text-white transition-colors hover:bg-purple-700"
              >
                <FiCamera size={15} />
                انتخاب تصویر
                <input
                  id="user-profile"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>

              {newUser.profile && (
                <button
                  type="button"
                  onClick={() => handleChange("profile", "")}
                  className="flex h-9 items-center gap-2 rounded-lg border border-red-100 bg-red-50 px-3 text-xs font-medium text-red-600 hover:bg-red-100"
                >
                  <FiX size={15} />
                  حذف تصویر
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* نام کاربری */}
      <div>
        <label htmlFor="user-username" className={labelClassName}>
          نام کاربری
        </label>

        <div className="relative">
          <FiUser
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={17}
          />

          <input
            id="user-username"
            type="text"
            placeholder="نام کاربری را وارد کنید"
            value={newUser.username ?? ""}
            onChange={(event) => handleChange("username", event.target.value)}
            onBlur={() => onBlur?.("username")}
            className={`${getInputClass("username")} pr-10`}
          />
        </div>
        {renderError("username")}
      </div>

      {/* نام و نام خانوادگی */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="user-firstname" className={labelClassName}>
            نام
          </label>

          <input
            id="user-firstname"
            type="text"
            placeholder="نام را وارد کنید"
            value={newUser.firstname ?? ""}
            onChange={(event) => handleChange("firstname", event.target.value)}
            onBlur={() => onBlur?.("firstname")}
            className={getInputClass("firstname")}
          />
          {renderError("firstname")}
        </div>

        <div>
          <label htmlFor="user-lastname" className={labelClassName}>
            نام خانوادگی
          </label>

          <input
            id="user-lastname"
            type="text"
            placeholder="نام خانوادگی را وارد کنید"
            value={newUser.lastname ?? ""}
            onChange={(event) => handleChange("lastname", event.target.value)}
            onBlur={() => onBlur?.("lastname")}
            className={getInputClass("lastname")}
          />
          {renderError("lastname")}
        </div>
      </div>

      {/* نقش کاربر */}
      <div>
        <label htmlFor="user-role" className={labelClassName}>
          نقش کاربر
        </label>

        <div className="relative">
          <FiShield
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={17}
          />

          <select
            id="user-role"
            value={newUser.role?.value ?? newUser.role ?? "USER"}
            onChange={(event) => handleChange("role", event.target.value)}
            className={`${inputClassName} cursor-pointer appearance-none pr-10`}
          >
            <option value="USER">کاربر</option>
            <option value="ADMIN">مدیر</option>
            <option value="SUPPORT">پشتیبانی</option>
          </select>
        </div>
      </div>

      {/* تلفن */}
      <div>
        <label htmlFor="user-phone" className={labelClassName}>
          شماره تلفن
        </label>

        <div className="relative">
          <FiPhone
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={17}
          />

          <input
            id="user-phone"
            type="tel"
            placeholder="مثلاً 09123456789"
            value={newUser.phone ?? ""}
            onChange={(event) => handleChange("phone", event.target.value)}
            className={`${inputClassName} pr-10`}
            dir="ltr"
          />
        </div>
      </div>

      {/* ایمیل */}
      <div>
        <label htmlFor="user-email" className={labelClassName}>
          ایمیل
        </label>

        <div className="relative">
          <FiMail
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={17}
          />

          <input
            id="user-email"
            type="email"
            placeholder="example@email.com"
            value={newUser.email ?? ""}
            onChange={(event) => handleChange("email", event.target.value)}
            className={`${inputClassName} pr-10`}
            dir="ltr"
          />
        </div>
      </div>

      {/* وضعیت کاربر */}
      <div>
        <label htmlFor="user-active" className={labelClassName}>
          وضعیت حساب کاربری
        </label>

        <div className="relative">
          <FiUserCheck
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={17}
          />

          <select
            id="user-active"
            value={String(newUser.isActive ?? true)}
            onChange={(event) =>
              handleChange("isActive", event.target.value === "true")
            }
            className={`${inputClassName} cursor-pointer appearance-none pr-10`}
          >
            <option value="true">فعال</option>
            <option value="false">غیرفعال</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AddUserFields;
