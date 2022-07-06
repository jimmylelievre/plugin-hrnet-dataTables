import React from "react";

import { DataTables } from "./lib";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

const App = () => (
  <div>
    <DataTables />
  </div>
);

root.render(<App />);
