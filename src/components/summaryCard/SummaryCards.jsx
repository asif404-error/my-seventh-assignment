import React from "react";

const SummaryCards = ({ friends }) => {
  const total = friends.length;

  const onTrack = friends.filter((f) => f.status === "On-Track").length;
  const needAttention = friends.filter(
    (f) => f.status === "Overdue" || f.status === "Almost Due",
  ).length;
  const interactions = 12;

  const cards = [
    { value: total, label: "Total Friends" },
    { value: onTrack, label: "On Track" },
    { value: needAttention, label: "Need Attention" },
    { value: interactions, label: "Interactions This Month" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-6 pb-8 md:pb-10 max-w-5xl mx-auto w-full">
      {cards.map((card, ind) => (
        <div
          key={ind}
          className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-gray-800">
            {card.value}
          </p>
          <p className="text-xs md:text-sm text-gray-500 mt-1">{card.label}</p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
