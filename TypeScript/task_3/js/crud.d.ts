// Importing the types from interface.ts
import { RowID, RowElement } from './interface';

// Declare the insertRow function
export function insertRow(row: RowElement): RowID;

// Declare the deleteRow function
export function deleteRow(rowId: RowID): void;

// Declare the updateRow function
export function updateRow(rowId: RowID, row: RowElement): RowID;