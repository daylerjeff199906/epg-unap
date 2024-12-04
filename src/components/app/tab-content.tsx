import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface IProps {
  right: React.ReactNode
  left: string
  titleRight?: string
  titleLeft?: string
}

export const TabContent = (props: IProps) => {
  const { right, left, titleLeft, titleRight } = props

  return (
    <Tabs
      defaultValue="ui"
      className="w-full space-y-8"
    >
      <TabsList className="grid max-w-screen-sm grid-cols-3 px-0 bg-transparent">
        <TabsTrigger
          value="ui"
          className="bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent"
        >
          {titleRight || 'Right'}
        </TabsTrigger>
        <TabsTrigger
          value="code"
          className="bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent"
        >
          {titleLeft || 'Left'}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="ui">
        <main
          className={`flex flex-col w-full`}
        >
          {right}
        </main>
      </TabsContent>
      <TabsContent
        value="code"
        className="max-w-screen-md px-1"
      >
        {left}
      </TabsContent>
    </Tabs>
  )
}
