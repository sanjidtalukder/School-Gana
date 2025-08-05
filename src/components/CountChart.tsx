"use client";

import Image from 'next/image';
import React from 'react';

import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const data = [
  { name: 'Total', count: 105, fill: '#C3EBFA' },
  { name: 'Boys', count: 55, fill: '#8884d8' },
  { name: 'Girls', count: 50, fill: '#FAE27C' },
];

const legendStyle = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const CountChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full h-full max-w-xl relative">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Student Gender Distribution
        </h2>
        <button className="hover:opacity-70 transition">
          <Image src="/moreDark.png" alt="More options" width={20} height={20} />
        </button>
      </div>

      {/* Chart Section */}
      <div className="relative h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="30%"
            outerRadius="90%"
            barSize={20}
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
              label={{ position: 'insideStart', fill: '#fff' }}
            />
            <Tooltip />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={legendStyle}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Center Image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src="/maleFemale.png" alt="Center icon" width={50} height={50} />
        </div>
      </div>

      {/* Gender Stats */}
      <div className="mt-6 flex justify-around text-center">
        {/* Boys */}
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-blue-500 mb-1"></div>
          <h3 className="text-sm font-bold text-gray-800">1,234</h3>
          <p className="text-xs text-gray-500">Boys (55%)</p>
        </div>

        {/* Girls */}
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-pink-500 mb-1"></div>
          <h3 className="text-sm font-bold text-gray-800">1,006</h3>
          <p className="text-xs text-gray-500">Girls (45%)</p>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
