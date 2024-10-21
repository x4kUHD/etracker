import Header from "./Header.js";
import SummaryCard from "./SummaryCard.js";

let incomeAmount = 99999;
let expensesAmount = 99999;
let balanceAmount = 99999;

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center ">
      <div className="w-11/12 mt-20 flex flex-col">
        <Header />
        <div className="bg-black w-1/2">
          <div className="w-11/12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="w-1/2">
              <SummaryCard title="Income" amount={incomeAmount} />
              <SummaryCard title="Expenses" amount={expensesAmount} />
              <SummaryCard title="Balance" amount={balanceAmount} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
