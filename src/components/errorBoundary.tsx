import React from "react";
import {
  Navigate,
  UNSAFE_ErrorResponseImpl,
  useRouteError,
} from "react-router-dom";

export const ErrorBoundary: React.FC = () => {
  const error = useRouteError();

  if (
    (error as UNSAFE_ErrorResponseImpl) &&
    (error as UNSAFE_ErrorResponseImpl).status === 404
  ) {
    return <Navigate to={"/404"} />;
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <p className="text-2xl text-gray-900 font-medium">
        Something went wrong...
      </p>
      <p className="text-red-600 font-medium mt-2">
        {(error as Error).message}
      </p>
    </div>
  );
};
