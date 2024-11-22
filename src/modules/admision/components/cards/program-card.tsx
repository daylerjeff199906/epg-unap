import { Sparkles } from 'lucide-react'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

export const ProgramCard = () => {
  return (
    <Card className="group relative w-full max-w-md overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
          <Image
            alt="Sorteo Navideño"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            height={400}
            src="/images/program-mini.webp"
            style={{
              aspectRatio: '4/3',
              objectFit: 'cover',
            }}
            width={600}
          />
          <Badge
            className="absolute right-3 top-3 z-20 bg-white/90 text-primary hover:bg-white/90"
            variant="secondary"
          >
            Tipo de Programa
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-primary">
            Maestría en Gestión Pública
            <Sparkles className="h-5 w-5 text-yellow-500" />
          </h3>
          <p className="text-sm text-muted-foreground">
            El CAP Regional Lima premia tu opinión en esta navidad. Ayúdanos a
            ser mejores, exprésate llenando la encuesta de satisfacción y
            participa en el sorteo de increíbles premios.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Precio por Ticket</p>
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-medium text-muted-foreground">
                S/
              </span>
              <span className="text-2xl font-bold text-primary">10</span>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 hover:bg-green-100"
          >
            Disponible
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          className="relative w-full overflow-hidden"
          size="lg"
        >
          <span className="relative z-10">Comprar Ticket</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-0 transition-opacity group-hover:opacity-10" />
        </Button>
      </CardFooter>
    </Card>
  )
}
