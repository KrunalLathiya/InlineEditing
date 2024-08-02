// src/components/UserTable.jsx

import DataTable from "./DataTable";
import { Box, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const UserTable = ({ data, columns, meta }) => (
  <Box sx={{ maxWidth: 800, margin: "auto", mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      User Table
    </Typography>
    <DataTable data={data} columns={columns} meta={meta} />
  </Box>
);

export default UserTable;
