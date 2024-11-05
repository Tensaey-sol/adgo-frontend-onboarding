import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#242424]">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-600 border-b-4"></div>
      <p className="mt-4 text-xl text-gray-700">Loading, please wait...</p>
    </div>
  );
};

export default LoadingSpinner;
