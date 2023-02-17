type TableHeadRowProps = {
  heads: string[]
}

function TableHeadRow({ heads }: TableHeadRowProps) {
  return (
    <tr>
      {heads.map((head) => (
        <th key={head}>{head}</th>
      ))}
    </tr>
  );
}

export default TableHeadRow;
