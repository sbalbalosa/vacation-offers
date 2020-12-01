import React from "react";

export interface Props {
  message: string;
}

export default function Error({ message }: Props): React.ReactElement {
  return (
    <div className="flex h-60 w-full justify-center items-center flex-col">
      <p className="text-3xl text-gray-400">{message}</p>
      <button
        className="mt-5 bg-gray-200 text-gray-700 text-base font-semibold px-6 py-2 rounded-lg"
        onClick={() => {
          window.location.reload();
        }}
      >
        Go back
      </button>
    </div>
  );
}
