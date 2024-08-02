// src/App.jsx

import { useApi } from "./hooks/useApi";
import { useEditedRows } from "./hooks/useEditedRows";
import {
  LoadingIndicator,
  ErrorIndicator,
} from "./components/LoadingIndicator";
import UserTable from "./components/UserTable";
import { columns } from "./config/columns";

const App = () => {
  const { data, loading, error, updateData } = useApi();
  const { editedRows, setEditedRow, isRowEdited, clearEditedRow } =
    useEditedRows();

  const saveRow = async (rowIndex) => {
    const originalRow = data[rowIndex];
    const editedRow = editedRows[rowIndex];
    const updatedRow = { ...originalRow, ...editedRow };

    await updateData(updatedRow.id, updatedRow);
    clearEditedRow(rowIndex);
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  return (
    <UserTable
      data={data}
      columns={columns}
      meta={{ setEditedRow, isRowEdited, saveRow }}
    />
  );
};

export default App;
