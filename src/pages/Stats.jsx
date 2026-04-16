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
    <div className="bg-[#f5f5f0] md:min-h-[80vh] ">
      <div className="max-w-3xl mx-auto  pt-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Friendship Analytics
        </h1>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <p className="text-sm text-gray-600 mb-4">By Interaction Type</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                dataKey="value"
                paddingAngle={3}
                cornerRadius={8}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;
