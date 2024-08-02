// src/components/EditableCell.jsx

import { useState, useEffect } from "react";
import { TextField } from "@mui/material";

// eslint-disable-next-line react/prop-types
const EditableCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onChange = (e) => {
    setValue(e.target.value);
    // eslint-disable-next-line react/prop-types
    table.options.meta?.setEditedRow(row.index, column.id, e.target.value);
  };

  return (
    <TextField value={value} onChange={onChange} variant="standard" fullWidth />
  );
};

export default EditableCell;
