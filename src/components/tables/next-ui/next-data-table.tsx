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
  actions?: React.ReactNode
  pagination?: React.ReactNode
}

export const NextDataTable = (props: IProps) => {
  const { columns, data, actions, pagination } = props

  const renderCell = (item: { [key: string]: string }, columnKey: string) => {
    const cellValue = getKeyValue(item, columnKey)

    switch (columnKey) {
      case 'actions':
        return <TableCell>{actions}</TableCell>
      default:
        return <TableCell>{cellValue}</TableCell>
    }
  }

  return (
    <Table
      aria-label="Table with client async pagination"
      radius="none"
      shadow="none"
      isHeaderSticky
      bottomContent={pagination}
    >
      <TableHeader
        columns={columns}
      >
        {(column) => <TableColumn 
          className="bg-primary-900 text-white" 
          key={column.key}
        >
          {
            column.key === 'actions' || column.key === 'Acciones'
              ? 'ACTIONS'
              : column.label
              
          }
        </TableColumn>}
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
            {(columnKey) => (
              renderCell(item, String(columnKey))
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
