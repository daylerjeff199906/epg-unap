export const courses = [
    {
        id: '1',
        code: 'C000256',
        name: 'NOMBRE DEL CURSO I',
        groups: [
            {
                id: 'a1',
                name: 'GRUPO A',
                teacher: 'PEPITO EL GRILLO MARADONA',
                schedule: 'LUNES - MIERCOLES - VIERNES',
                shift: 'NOCHE',
                spots: { taken: 10, total: 60 },
                available: true
            },
            {
                id: 'b1',
                name: 'GRUPO B',
                teacher: 'PEPITO EL GRILLO MARADONA',
                schedule: 'LUNES - MIERCOLES - VIERNES',
                shift: 'NOCHE',
                spots: { taken: 10, total: 60 },
                available: true
            }
        ]
    },
    {
        id: '2',
        code: 'C000256',
        name: 'NOMBRE DEL CURSO II',
        selected: true,
        groups: [
            {
                id: 'a2',
                name: 'GRUPO A',
                teacher: 'PEPITO EL GRILLO MARADONA',
                schedule: 'LUNES - MIERCOLES - VIERNES',
                shift: 'NOCHE',
                spots: { taken: 10, total: 60 },
                available: true
            }
        ]
    }
]