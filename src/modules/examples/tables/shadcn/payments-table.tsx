import { DataTable } from '@/components/tables/shadcn-table/main-table';
import { useEffect, useState } from 'react';
import { paymentColumns } from './payment-columns';
import { Payment, payments } from './payments-data';


export default function PaymentsTable() {
    const [search, setSearch] = useState('');
    const [filteredPayments, setFilteredPayments] = useState<Payment[]>([]);

    useEffect(() => {
        const filtered = payments.filter((payment) => {
            return payment.email.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredPayments(filtered);
    }, [search]);

    return (
        <>
            <DataTable
                columns={paymentColumns}
                data={filteredPayments}
                hasSearch={false}
                searchPlaceholder='Buscar por nombre'
                valueSearch={search}
                onValueSearch={(value) => setSearch(value)}
            />
        </>
    );
}
