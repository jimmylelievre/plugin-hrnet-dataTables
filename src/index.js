import React from "react";
import { render } from "react-dom";
import { DataTables } from "./lib";

const App = () => (
  <div>
    <DataTables />
  </div>
);

render(<App />, document.getElementById("root"));
