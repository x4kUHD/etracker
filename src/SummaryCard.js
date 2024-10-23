const SummaryCard = ({ title, amount }) => {
  return (
    <div className="bg-white rounded-lg p-6 w-52 h-40">
      <h1 className="text-slate-400 text-xl">{title}</h1>
      <p className="text-3xl pt-6">${amount}</p>
    </div>
  );
};

export default SummaryCard;
