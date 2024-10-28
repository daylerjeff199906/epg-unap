'use client'

import { Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react";

interface IProps {
  columns: Array<{
    key: string
    label: string
  }>
  data: Array<{
    [key: string]: string
  }>
}

export const NextDataTable = (props: IProps) => {
  const { columns, data } = props

  return (
    <Table
      aria-label="Example table with client async pagination"
      radius="none"
      shadow="none"
      isHeaderSticky
    >
      <TableHeader 
        columns={columns}
      >
        {(column) => <TableColumn className="bg-primary-900 text-white" key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody
        items={data ?? []}
        loadingContent={<Spinner />}
        emptyContent="No data"
      >
        {(item) => (
          <TableRow key={
            item.id
              ? item.id
              : item.key
          }>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
