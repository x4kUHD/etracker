import Header from "./Header.js";
import Spending from "./Spending.js";
import SummaryCard from "./SummaryCard.js";
import TransactionHistory from "./TransactionHistory.js";

let incomeAmount = 99999;
let expensesAmount = 99999;
let balanceAmount = 99999;

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center">
      <div className="w-11/12 mt-4 flex flex-col">
        <Header />
        <div className="mt-4 mb-4 grid h-full w-full grid-cols-10 grid-rows-6 gap-4">
          {/* Income Card */}
          <div className="bg-white col-span-2 row-span-1 rounded-xl">
            <SummaryCard title="Income" amount={incomeAmount}></SummaryCard>
          </div>

          {/* Expense Card */}
          <div className="bg-white col-span-2 row-span-1 rounded-xl">
            <SummaryCard title="Expenses" amount={expensesAmount}></SummaryCard>
          </div>

          {/* Balance Card */}
          <div className="bg-white col-span-2 row-span-1 rounded-xl">
            <SummaryCard title="Balance" amount={balanceAmount}></SummaryCard>
          </div>

          {/* Transaction History */}
          <div className="bg-white col-span-4 row-span-6 rounded-xl">
            <TransactionHistory></TransactionHistory>
          </div>

          {/* Spending Chart */}
          <div className="bg-white col-span-6 row-span-5 rounded-xl flex">
            <Spending></Spending>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
