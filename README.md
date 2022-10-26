# Getting Started

The `data-tables-plugin-hrnet` as its name suggests, is a plugins developed as part of my OpenClassRooms training program.
It's quite simply a React plugin allowing to display a data table, for more information go to the section "How the plugin works"

## Installation

```
$ npm install npm i data-tables-plugin-hrnet
```

### How the plugin works

**Import module:**

```jsx
import import { DataTables } from "data-tables-plugin-hrnet";
```

**Create your Header for the data table:**

```jsx
import { dataHeader } from "../yourData";
```

**format of your Header:**

```jsx
const dataHeader = ["Firstname", "Lastname", "Start", "Department"];
```

**format of your rows data:**

```jsx
const tableItem = [
  {
    nameofyourcolumn: "nameofyourrows",
    nameofyourcolumn: "nameofyourrows",
    nameofyourcolumn: "nameofyourrows",
    nameofyourcolumn: "nameofyourrows",
  },
  {
    nameofyourcolumn: "nameofyourrows",
    nameofyourcolumn: "nameofyourrows",
    nameofyourcolumn: "nameofyourrows",
    nameofyourcolumn: "nameofyourrows",
  },
];
```

**Import your rows data:**

```jsx
import { rows } from "../your rows data";
```

**Render your dataTable in your component:**

```jsx
return (
  <>
    <DataTables dataHeader={dataHeader} tableItem={rows} />
  </>
);
```

### More about this plugin

To know more about this plugin or on my work, do not hesitate to contact me on my main networks
[Linkedin](https://www.linkedin.com/in/jimmy-lelievre/) - [GitHub](https://github.com/jimmylelievre)
