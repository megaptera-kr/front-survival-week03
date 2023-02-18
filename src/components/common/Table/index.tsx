import React, { PropsWithChildren } from 'react';

export type TableProps = PropsWithChildren

function Table({ children }: TableProps) {
  return (
    <table>{children}</table>
  );
}

function TableHeader({ header }: {header: React.ReactNode}) {
  return (
    <thead>{header}</thead>
  );
}

function TableRow({ row }: {row: React.ReactNode}) {
  return (
    <tbody>{row}</tbody>
  );
}

Table.Header = TableHeader;
Table.Row = TableRow;

export default Table;
