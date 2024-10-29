'use client'

import { columns, users } from './data';
import { NextDataTable } from "./next-data-table";
import { TableAction } from './table-sections/table-action';
import { TablePagination } from './table-sections/table-pagination';

type User = typeof users[0];

export const TableExample = () => {

    const userdata = users.map((user:User) => ({
        ...user,
        id: user.id.toString(),
        name: user.name,
        email: user.email,
        age: user.age.toString(),
    }));

    const headers = columns.map((column) => ({
        key: column.uid,
        label: column.name
    }));

  return (
    <NextDataTable 
        data={userdata} 
        columns={headers}
        actions={<TableAction />}
        pagination={<TablePagination 
            totalItems={userdata.length} 
            rowsPerPage={5} 
            page={1} 
            onPageChange={() => {}} 
            onRowsPerPageChange={() => {}}
        />}
    />
  );
}
