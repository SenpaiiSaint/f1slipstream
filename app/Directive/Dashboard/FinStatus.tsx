import React from "react";
import { FiUser } from "react-icons/fi";

export const FinStatus = () => {
  return (
    <div className="col-span-8 overflow-hidden rounded border border-stone-300">
        <div className="p-4">
            <h3 className="flex items-center gap-1.5 font-medium">Net Worth
                <FiUser /> Activity { /* Placeholder */}
                </h3>
        </div>
        <div>
            {/* Render the Chart Here Below */}
            {/* Example: <LineChartPulse /> */}
        </div>
    </div>
  );
};
