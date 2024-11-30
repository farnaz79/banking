'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const chartData = {
    datasets: [
      {
        lable: "bank",
        data: [20000, 30000, 10000],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
  labels: [ "blue bank","melat bank", "meli bank"]

  };
  return <Doughnut data={chartData} options={{
    cutout : '70%',
    plugins:{
        legend:{
            display : false
        }
    }
  }} />;
};

export default DoughnutChart;
