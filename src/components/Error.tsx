import React from "react";

export interface Props {
  message: string;
  onBack: () => void;
}

export default function Error({ message, onBack }: Props): React.ReactElement {
  return (
    <div className="flex h-60 w-full justify-center items-center flex-col">
      <p className="text-3xl text-gray-400" role="alert">
        {message}
      </p>
      <button
        className="mt-5 bg-gray-200 text-gray-700 text-base font-semibold px-6 py-2 rounded-lg"
        onClick={onBack}
      >
        Go back
      </button>
    </div>
  );
}
