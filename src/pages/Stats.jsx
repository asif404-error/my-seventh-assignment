import React from "react";
import { useTimeline } from "../context/TimelineProvider";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = ["#7c3aed", "#1b4332", "#22c55e"];

const Stats = () => {
  const { interactions } = useTimeline();

  const callCount = interactions.filter((i) => i.type === "Call").length;
  const textCount = interactions.filter((i) => i.type === "Text").length;
  const videoCount = interactions.filter((i) => i.type === "Video").length;

  const data = [
    { name: "Text", value: textCount || 1 },
    { name: "Call", value: callCount || 1 },
    { name: "Video", value: videoCount || 1 },
  ];

  return (
    <div className="bg-[#f5f5f0] min-h-screen px-4 md:px-6 lg:px-8 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">
          Friendship Analytics
        </h1>
        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
          <p className="text-sm md:text-base text-gray-600 mb-4 text-center md:text-left">
            By Interaction Type
          </p>
          <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius="40%"
                  outerRadius="70%"
                  dataKey="value"
                  paddingAngle={3}
                  cornerRadius={8}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  iconType="circle"
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
