// src/components/LoadingIndicator.jsx

import { CircularProgress, Typography } from "@mui/material";

export const LoadingIndicator = () => <CircularProgress />;

// eslint-disable-next-line react/prop-types
export const ErrorIndicator = ({ error }) => (
  // eslint-disable-next-line react/prop-types
  <Typography color="error">Error: {error.message}</Typography>
);
