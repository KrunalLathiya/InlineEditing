// src/hooks/useEditedRows.js

import { useState } from "react";

export const useEditedRows = () => {
    const [editedRows, setEditedRows] = useState({});

    const setEditedRow = (rowIndex, columnId, value) => {
        setEditedRows((prev) => ({
            ...prev,
            [rowIndex]: {
                ...prev[rowIndex],
                [columnId]: value,
            },
        }));
    };

    const isRowEdited = (rowIndex) => {
        return !!editedRows[rowIndex];
    };

    const clearEditedRow = (rowIndex) => {
        setEditedRows((prev) => {
            const newState = { ...prev };
            delete newState[rowIndex];
            return newState;
        });
    };

    return { editedRows, setEditedRow, isRowEdited, clearEditedRow };
};
