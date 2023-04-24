export type Column<T> = {
  key: T;
  label: string;
}

export type Columns<T extends string> = ReadonlyArray<Column<T>>;
