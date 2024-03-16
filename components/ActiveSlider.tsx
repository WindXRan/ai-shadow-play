import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const ActiveSlider = ({ children: slides }: { children: any }) => {
  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform">{slides}</div>
      <div>
        <button>
          <ArrowLeft />
        </button>
        <button>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ActiveSlider;
