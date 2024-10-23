import Header from "./Header.js";
import Spending from "./Spending.js";
import SummaryCard from "./SummaryCard.js";
import TransactionHistory from "./TransactionHistory.js";

let incomeAmount = 99999;
let expensesAmount = 99999;
let balanceAmount = 99999;

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center ">
      <div className="w-11/12 mt-20 flex flex-col">
        <Header />
        <div className="bg-red-100 w-11/12 flex">
          <div className="w-full flex gap-[16px] pt-8">
            <SummaryCard title="Income" amount={incomeAmount} />
            <SummaryCard title="Expenses" amount={expensesAmount} />
            <SummaryCard title="Balance" amount={balanceAmount} />
          </div>
          
          <div className="w-full bg-red-400 pt-8 flex">
            <div className="ml-auto">
              <TransactionHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
