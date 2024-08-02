// src/config/columns.jsx

import EditableCell from "../components/EditableCell";

export const columns = [
  {
    header: "Name",
    accessorKey: "name",
    cell: EditableCell,
  },
  {
    header: "Email",
    accessorKey: "email",
    cell: EditableCell,
  },
  {
    header: "Age",
    accessorKey: "age",
    cell: EditableCell,
  },
];
