import React from "react";

const Badge = () => {
  return (
    <div className="flex items-center space-x-3
                    border border-green-600
                    rounded-full
                    bg-green-900/90
                    p-1.5
                    text-xl font-semibold
                    text-green-100">

      <p className="px-10 text-center mx-auto text-2xl font-semibold tracking-wide">
        I am learning Context <span className="text-zinc-950 font-extrabold">API</span>
      </p>

    </div>
  );
};

export default Badge;
