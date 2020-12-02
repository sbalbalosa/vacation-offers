import React from "react";
import Offers from "./features/offers/components/Offers";

function App(): React.ReactElement {
  return (
    <>
      <div className="w-full h-16 bg-blue-500 mb-8 shadow-lg border-b-2 border-blue-600 flex justify-center items-center">
        <div className="text-white text-2xl font-bold">Sharlon Challenge</div>
      </div>
      <div className="container mx-auto">
        <Offers />
      </div>
    </>
  );
}

export default App;
