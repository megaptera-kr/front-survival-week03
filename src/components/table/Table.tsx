import { PropsWithChildren } from 'react';
import { Columns } from '../../types/table';

interface TableProps<T extends string> {
  title: string;
  columns: Columns<T>;
  children: React.ReactElement;
}

export default function Table<T extends string>({ title, columns, children }: TableProps<T>) {
  return (
    <table>
      <caption>{title}</caption>
      <thead>
        <Table.Row>
          {columns.map(({ key, label }) => (
            <th key={key} scope="row">{label}</th>
          ))}
        </Table.Row>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}

Table.Row = function TableRow({ children }: PropsWithChildren) {
  return <tr>{children}</tr>;
};

Table.Cell = function TableData({ children }: PropsWithChildren) {
  return (
    <td>
      {children}
    </td>
  );
};
