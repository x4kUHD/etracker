const TransactionItem = ({ name, date, amount, isIncome }) => {
  return (
    <div className="w-full flex py-4 items-center border-b border-gray-200">
      <div className="flex flex-col">
        <div className="text-lg">{name}</div>
        <div className="text-sm text-gray-500 leading-3">{date}</div>
      </div>
      <div
        className={`text-2xl font-semibold ml-auto ${
          isIncome ? "text-green-600" : " text-red-600"
        }`}
      >
        ${amount.toLocaleString()}
      </div>
    </div>
  );
};

export default TransactionItem;
