"use client";

import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Sun", uv: 15, pv: 90, amt: 105 },  // Low attendance
  { name: "Mon", uv: 10, pv: 95, amt: 105 },
  { name: "Tue", uv: 7, pv: 98, amt: 105 },
  { name: "Wed", uv: 12, pv: 93, amt: 105 },
  { name: "Thu", uv: 8, pv: 97, amt: 105 },
  { name: "Fri", uv: 5, pv: 100, amt: 105 },
  { name: "Sat", uv: 20, pv: 85, amt: 105 },  // Weekend drop
];


const AttendanceChart = () => {
  return (
    <div className="bg-white p-7 rounded-xl shadow-md w-full max-w-4xl">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Weekly Attendance Overview
      </h2>

      {/* Chart */}
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#8884d8"
              name="Present"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#82ca9d"
              name="Absent"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
