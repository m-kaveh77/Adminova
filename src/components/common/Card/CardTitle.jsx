const CardTitle = ({ title, subTitle }) => {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <p className="mt-1 text-sm text-gray-400">{subTitle}</p>
    </div>
  );
};

export default CardTitle;
