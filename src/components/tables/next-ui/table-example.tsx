/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { columns, users } from './data';
import { NextDataTable } from "./next-data-table";

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
    />
  );
}
