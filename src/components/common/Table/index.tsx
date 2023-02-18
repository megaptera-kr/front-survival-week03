import React, { CSSProperties, PropsWithChildren } from 'react';

type TablePropsWithStyle = {
   style?: CSSProperties
}

type TableHeaderProps = {
   header: React.ReactNode
} & TablePropsWithStyle

type TableRowProps = {
   row: React.ReactNode

}& TablePropsWithStyle

function Table({ children }: PropsWithChildren) {
  return (
    <table>{children}</table>
  );
}

function TableHeader({ header, style }: TableHeaderProps) {
  return (
    <thead style={style}>{header}</thead>
  );
}

function TableRow({ row, style }: TableRowProps) {
  return (
    <tbody style={style}>{row}</tbody>
  );
}

Table.Header = TableHeader;
Table.Row = TableRow;

export default Table;
