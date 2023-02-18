import React, { PropsWithChildren } from 'react';

function FilterableTable({ children }: PropsWithChildren) {
  return (
    <div className="filterable-table">{children}</div>
  );
}

function Toolbar({ toolbar }: {toolbar: React.ReactNode}) {
  return (
    <div>{toolbar}</div>
  );
}

function View({ view }: {view: React.ReactNode}) {
  return (
    <div>{view}</div>
  );
}

FilterableTable.Toolbar = Toolbar;
FilterableTable.View = View;

export default FilterableTable;
