import React from "react";
import logo from "./logo.svg";
import Offers from "./features/offers/Offers";

function App(): React.ReactElement {
  return (
    <div className="container mx-auto">
      <Offers />
    </div>
  );
}

export default App;
