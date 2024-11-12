'use client'

import { DataTable } from '@/components/tables/shadcn-table/main-table';
import { enrollementColumns, IEnrollment } from './enrollment-columns';
import { payments } from '@/modules/examples/tables/shadcn/payments-data';
import { useEffect, useState } from 'react';
import { useFilterFromUrl } from '@/lib/filter-url';
import { DataTablePagination } from '@/components/tables';

export default function EnrollmentTable () {
    const { getParams } = useFilterFromUrl();

    const searchTerm = getParams({ key: 'search', value: '' });

    const [filteredPayments, setFilteredPayments] = useState<IEnrollment[]>([]);

    useEffect(() => {
        const filtered = payments.filter((payment) => {
            return payment.nombre_usuario.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredPayments(filtered);
    }, [searchTerm]);

    return (
        <>
            <DataTable
                columns={enrollementColumns}
                data={filteredPayments}
                isStriped
                hasPagination
            />
            <DataTablePagination 
                page={1}
                pageSize={15}
                count={filteredPayments.length}
                onPageChange={() => {}}
                onPageSizeChange={() => {}}
            />
        </>
    );
}
