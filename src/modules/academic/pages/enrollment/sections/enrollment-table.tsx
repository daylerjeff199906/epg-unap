'use client'

import { DataTable } from '@/components/tables/shadcn-table/main-table';
import { enrollementColumns, IEnrollment } from './enrollment-columns';
import { payments } from '@/modules/examples/tables/shadcn/payments-data';
import { useEffect, useState } from 'react';
import { useFilterFromUrl } from '@/lib/filter-url';
import { TablePaginationFilter } from '../../../components/filters/pagination-filter';

export default function EnrollmentTable () {
    const { getParams, createFilter } = useFilterFromUrl();

    const searchTerm = getParams({ key: 'search', value: '' });
    const page = getParams({ key: 'page', value: '' });
    const pageSize = getParams({ key: 'pageSize', value: '' });

    const [filteredPayments, setFilteredPayments] = useState<IEnrollment[]>([]);

    useEffect(() => {
        let filtered = payments;
    
        // Filtrado por búsqueda
        if (searchTerm) {
            filtered = filtered.filter((payment) =>
                payment.persona_asignada.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
    
        // Cálculo del índice de inicio y final para la paginación
        const startIndex = (parseInt(page || '1') - 1) * parseInt(pageSize || '10');
        const paginatedPayments = filtered.slice(startIndex, startIndex + parseInt(pageSize || '10'));
        setFilteredPayments(paginatedPayments);
    }, [searchTerm, page, pageSize]);

    return (
        <>
            <DataTable
                columns={enrollementColumns}
                data={filteredPayments}
                isStriped
            />
            <TablePaginationFilter 
                page={parseInt(page || '1')}
                pageSize={parseInt(pageSize || '15')}
                count={payments.length}
                onPageChange={(page) => {
                    createFilter({ key: 'page', value: page.toString() });
                }}
                onPageSizeChange={(pageSize) => {
                    createFilter({ key: 'pageSize', value: pageSize.toString() });
                }}
            />
        </>
    );
}
