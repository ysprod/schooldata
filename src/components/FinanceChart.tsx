"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    recette: 4000,
    depense: 2400,
  },
  {
    name: "Fev",
    recette: 3000,
    depense: 1398,
  },
  {
    name: "Mar",
    recette: 2000,
    depense: 9800,
  },
  {
    name: "Avr",
    recette: 2780,
    depense: 3908,
  },
  {
    name: "Mai",
    recette: 1890,
    depense: 4800,
  },
  {
    name: "Juin",
    recette: 2390,
    depense: 3800,
  },
  {
    name: "Juil",
    recette: 3490,
    depense: 4300,
  },
  {
    name: "Aout",
    recette: 3490,
    depense: 4300,
  },
  {
    name: "Sept",
    recette: 3490,
    depense: 4300,
  },
  {
    name: "Oct",
    recette: 3490,
    depense: 4300,
  },
  {
    name: "Nov",
    recette: 3490,
    depense: 4300,
  },
  {
    name: "Dec",
    recette: 3490,
    depense: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={20} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="recette"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="depense" stroke="#CFCEFF" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
