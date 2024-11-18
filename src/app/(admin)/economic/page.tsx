'use client'

// import { Label } from '@/components/ui/label'
// import { Switch } from '@/components/ui/switch'

// import { useSidebar } from '@/hooks/use-sidebar'
// import { useStore } from '@/hooks/use-store'

export default function Page() {
  // const sidebar = useStore(useSidebar, (x) => x)
  // if (!sidebar) return null
  // const { settings, setSettings } = sidebar

  return (
    <div>
      <div className="flex items-center space-x-2">
        {/* <Switch
          id="is-hover-open"
          onCheckedChange={(x) => setSettings({ isHoverOpen: x })}
          checked={settings.isHoverOpen}
        />
        <Label htmlFor="is-hover-open">Hover Open</Label> */}
      </div>
    </div>
  )
}
