// components/InsightsSection.tsx
import React from "react";
import Image from "next/image";
import { insights } from "./insights";
import { Insight } from "./insight";
import ContentContainer from "./ContentContainer";

const InsightSection: React.FC = () => {
  return (
    <div id="insights" className="bg-orange-500 py-12">
      <div className="text-center text-white mb-6">
        <h2 className="text-4xl font-bold">Insights and Trends</h2>
        <p className="mt-2">
          Stay ahead with our curated content on the latest HR trends and
          insights:
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="bg-[#FCFFF6] rounded-lg p-6 shadow-lg flex flex-col items-center text-center space-y-4"
          >
            <Image src={insight.icon} alt="" width={64} height={64} />
            <div>
              <h3 className="text-lg font-semibold">{insight.title}</h3>
              <p>{insight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightSection;
