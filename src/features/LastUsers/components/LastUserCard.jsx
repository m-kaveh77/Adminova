const LastUserCard = ({ id, profile, firstname, lastname, username, role }) => {
  return (
    <div
      key={id}
      className="flex items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-gray-50"
    >
      <div className="size-12 shrink-0 overflow-hidden rounded-full border border-gray-100 bg-gray-50">
        <img
          src={profile}
          alt={`${firstname} ${lastname}`}
          className="size-full object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-gray-800">
          {firstname} {lastname}
        </h3>

        <p className="mt-1 truncate text-xs text-gray-400">@{username}</p>
      </div>

      <span className="shrink-0 rounded-lg bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-600">
        {role.label}
      </span>
    </div>
  );
};

export default LastUserCard;
