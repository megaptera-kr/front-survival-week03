import { ReactNode } from 'react';

type TableHeadProps = {
  children: ReactNode;
};

export default function TableHead({ children }: TableHeadProps) {
  return <th style={{ paddingInline: '2rem' }}>{children}</th>;
}
