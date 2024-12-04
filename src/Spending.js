import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  layouts,
} from "chart.js";

import { color } from "chart.js/helpers";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Groceries", "Restaurants", "Subscriptions", "Other"],
  datasets: [
    {
      data: [4010, 2600, 2900, 3100],
      backgroundColor: ["lightpink", "lightgreen", "lightskyblue", "bisque"],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "right",
      labels: {
        font: {
          size: 18,
        },
        color: "black",
      },
      onClick: null,
      layout: {
        padding: {
          right: 20,
        },
      },
    },
  },
};

const Spending = () => {
  return (
    <div className="w-full h-full flex-col">
      <h1 className="pt-4 pl-4 text-slate-400 text-sm">Spending</h1>
      <div className="w-full h-5/6 flex flex-col items-center justify-center">
        <div
          style={{
            maxWidth: "800px",
            maxHeight: "800px",
            width: "100%",
            height: "100%",
            paddingLeft: "100px",
          }}
        >
          <Pie data={data} options={options}></Pie>
        </div>
      </div>
    </div>
  );
};

export default Spending;
