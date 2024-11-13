import TransactionItem from "./TransactionItem";

const transactions = [
  {
    name: "Transaction 1",
    date: "October 16, 2024",
    amount: 1234,
    isIncome: true,
  },
  {
    name: "Transaction 2",
    date: "October 16, 2024",
    amount: 1234,
    isIncome: false,
  },
  {
    name: "Transaction 3",
    date: "October 16, 2024",
    amount: 1234,
    isIncome: true,
  },
];

const TransactionHistory = () => {
  return (
    <div className="pt-4 pl-4 w-full pr-4">
      <h1 className="text-slate-400 text-sm">Transaction History</h1>
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          name={transaction.name}
          date={transaction.date}
          amount={transaction.amount}
          isIncome={transaction.isIncome}
        />
      ))}
    </div>
  );
};

export default TransactionHistory;
