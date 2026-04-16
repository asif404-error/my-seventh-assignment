import React from 'react';
import { useNavigate } from 'react-router';

const ErrorText = () => {
   const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#f5f5f0]">
      <h1 className="text-8xl font-bold text-[#1b4332]">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 text-sm mt-2">
        The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 btn bg-[#2d6a4f] text-white hover:bg-[#1b4332] border-none"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorText;