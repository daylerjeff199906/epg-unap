import { Card, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'

export const PlanStudyCard = () => {
  return (
    <Card>
      <CardContent className="pt-4">
        <header>
          <h2 className="font-semibold">Plan de estudio</h2>
          <h3 className="text-sm text-gray-500">Cod. 2021-1</h3>
        </header>
        <p></p>
      </CardContent>
      <CardFooter>
        <h3 className="text-sm text-gray-600">Sede</h3>
      </CardFooter>
    </Card>
  )
}
