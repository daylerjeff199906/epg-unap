'use client'

import { DataTable } from '@/components/tables/shadcn-table/main-table';
import { useEffect, useState } from 'react';
import { payments } from './payments-data';
import { enrollementColumns, IEnrollment } from '@/modules/academic/pages/enrollment/enrollment-columns';

export default function PaymentsTable() {
    const [search, setSearch] = useState('');
    const [filteredPayments, setFilteredPayments] = useState<IEnrollment[]>([]);

    useEffect(() => {
        const filtered = payments.filter((payment) => {
            return payment.nombre_usuario.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredPayments(filtered);
    }, [search]);

    return (
        <>
            <DataTable
                columns={enrollementColumns}
                data={filteredPayments}
                searchPlaceholder='Buscar por nombre'
                valueSearch={search}
                onValueSearch={(value) => setSearch(value)}
                isStriped
            />
        </>
    );
}
