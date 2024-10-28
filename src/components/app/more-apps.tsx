import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import React from 'react'
import { IMoreApp } from '@/types/index'

interface MoreAppsProps {
  apps: IMoreApp[]
  children?: React.ReactNode
}

const MoreApps = (props: MoreAppsProps) => {
  const { children, apps } = props
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className='rounded-sm'>
        <div className="flex gap-2">
          {apps.map((app) => (
            <ListItem
              key={app.id}
              {...app}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

const ListItem = (props: IMoreApp) => {
  const { title, description, icon, url } = props

  return (
    <>
      <a
        target="_blank"
        href={url}
        className="flex flex-col items-center justify-center select-none space-y-1 rounded-sm p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-slate-200 focus:bg-slate-200"
      >
        <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-md">
          <img
            src={icon}
            alt={title}
          />
        </div>
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
          {description}
        </p>
      </a>
    </>
  )
}

export default MoreApps
