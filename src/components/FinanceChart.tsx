"use client";
import Image from 'next/image';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Sample monthly finance data
const data = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Feb', income: 3000, expense: 1398 },
  { name: 'Mar', income: 2000, expense: 9800 },
  { name: 'Apr', income: 2780, expense: 3908 },
  { name: 'May', income: 1890, expense: 4800 },
  { name: 'Jun', income: 2390, expense: 3800 },
  { name: 'Jul', income: 3490, expense: 4300 },
  { name: 'Aug', income: 4100, expense: 3100 },
  { name: 'Sep', income: 3700, expense: 4500 },
  { name: 'Oct', income: 4200, expense: 4000 },
  { name: 'Nov', income: 3900, expense: 3700 },
  { name: 'Dec', income: 4500, expense: 4900 },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-6 shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-700">Monthly Finance Report</h2>
        <button className="hover:opacity-70 transition">
          <Image src="/moreDark.png" alt="More options" width={20} height={20} />
        </button>
      </div>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              formatter={(value: number) => [`${value}`, 'Amount']}
              contentStyle={{ backgroundColor: '#f9fafb', borderRadius: '8px' }}
            />
            <Legend verticalAlign="top" height={36} />
            <Line type="monotone" dataKey="income" stroke="#22c55e" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceChart;
