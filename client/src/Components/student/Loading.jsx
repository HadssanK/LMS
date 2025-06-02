import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Loading = () => {
  const { path } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (path) {
     

      const timer = setTimeout(() => {
        navigate(`/${path}`);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []); // ✅ dependency array

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-16 sm:w-20 aspect-square border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin"></div>
      <p className="mt-4 text-sm text-gray-500">Redirecting in 5 seconds...</p>
    </div>
  );
};

export default Loading;
