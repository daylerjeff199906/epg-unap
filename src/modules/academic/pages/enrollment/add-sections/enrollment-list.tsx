'use client'

import { useFilterFromUrl } from "@/lib/filter-url";
import { useEffect, useState } from "react";
import { expedientData, IExpedient } from "@/modules/examples/enrollment-data";
import { CardStudents } from "../../students/components";



export const EnrollmentList = () => {
    const { getParams } = useFilterFromUrl();

    const searchTerm = getParams({ key: 'search', value: '' });
    const page = getParams({ key: 'page', value: '' });
    const pageSize = getParams({ key: 'pageSize', value: '' });

    
    const [filteredExpedients, setFilteredExpedients] = useState<IExpedient[]>([]);

    useEffect(() => {
        let filtered = expedientData;
    
        // Filtrado por búsqueda
        if (searchTerm) {
            filtered = filtered.filter((item) =>
                item.persona_asignada.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
    
        // Cálculo del índice de inicio y final para la paginación
        const startIndex = (parseInt(page || '1') - 1) * parseInt(pageSize || '10');
        const paginatedPayments = filtered.slice(startIndex, startIndex + parseInt(pageSize || '10'));
        setFilteredExpedients(paginatedPayments);
    }, [searchTerm, page, pageSize]);


  return (
    <div className="flex flex-col gap-4">
        {
            filteredExpedients.map((expedient) => (
                <CardStudents
                    key={expedient.id}
                    showButton
                    expedient={expedient}
                />
            ))
        }
        
    </div>
  )
}
