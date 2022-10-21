import React from "react";
import { dataHeader, tableItem } from "./dataMock";

import { DataTables } from "./lib";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

const App = () => (
  <div>
    <React.StrictMode>
      <DataTables dataHeader={dataHeader} tableItem={tableItem} />
    </React.StrictMode>
  </div>
);

root.render(<App />);
