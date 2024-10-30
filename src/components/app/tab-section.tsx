import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CodeBlock } from '../actions'

interface IProps {
  children: React.ReactNode
  code: string
  usage?: string
}

export const TabSection = (props: IProps) => {
  const { children, code, usage } = props

  return (
    <Tabs
      defaultValue="ui"
      className="w-full"
    >
      <TabsList className="grid max-w-screen-sm grid-cols-3 px-0 bg-transparent">
        <TabsTrigger
          value="ui"
          className="bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent"
          //   className="bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-epgPrimary-900 data-[state=active]:shadow-none data-[state=active]:bg-transparent"
        >
          Preview
        </TabsTrigger>
        <TabsTrigger
          value="code"
          className="bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent"
        >
          Code
        </TabsTrigger>
        {usage && (
          <TabsTrigger
            value="usage"
            className="bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-epgPrimary-900 data-[state=active]:shadow-none data-[state=active]:bg-transparent"
          >
            Usage
          </TabsTrigger>
        )}
      </TabsList>
      <TabsContent
        value="ui"
        className="px-1"
      >
        {children}
      </TabsContent>
      <TabsContent
        value="code"
        className="max-w-screen-md px-1"
      >
        <CodeBlock code={code} />
      </TabsContent>
      {usage && (
        <TabsContent
          value="usage"
          className="max-w-screen-md px-1"
        >
          <CodeBlock code={usage} />
        </TabsContent>
      )}
    </Tabs>
  )
}
