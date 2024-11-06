export const paymentsData: Payment[] = [
  {
    id: '001',
    code_payment: 'ASD123',
    date_payment: '20/10/2024',
    concept: 'Pago de matrícula',
    status: 'Pendiente',
  },
  {
    id: '002',
    code_payment: 'ASD124',
    date_payment: '21/10/2024',
    concept: 'Pago de matrícula',
    status: 'Pagado',
  },
  {
    id: '003',
    code_payment: 'ASD125',
    date_payment: '22/10/2024',
    concept: 'Pago de cuotas',
    status: 'Pendiente',
  },
  {
    id: '004',
    code_payment: 'ASD126',
    concept: 'Carne universitario',
    date_payment: '23/10/2024',
    status: 'Pendiente',
  },
  {
    id: '005',
    code_payment: 'ASD127',
    date_payment: '24/10/2024',
    concept: 'Solictud de certificado',
    status: 'Pagado',
  },
]

export type Payment = {
  id: string
  date_payment: string
  code_payment: string
  concept: string
  status: string
}
