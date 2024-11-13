const SummaryCard = ({ title, amount }) => {
  return (
    <div className="h-full flex flex-col justify-between">
      <h1 className="text-slate-400 text-sm mt-4 ml-4">{title}</h1>

      <div className="ml-4 mt-2 text-2xl font-normal h-full flex-flex-1">
        ${amount.toLocaleString()}
      </div>
    </div>
  );
};

export default SummaryCard;
