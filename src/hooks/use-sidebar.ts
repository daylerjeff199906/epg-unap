import { useState, useEffect } from 'react'

type SidebarSettings = { disabled: boolean; isHoverOpen: boolean }
type SidebarStore = {
  isOpen: boolean
  isHover: boolean
  settings: SidebarSettings
  toggleOpen: () => void
  setIsOpen: (isOpen: boolean) => void
  setIsHover: (isHover: boolean) => void
  getOpenState: () => boolean
  setSettings: (settings: Partial<SidebarSettings>) => void
}

const SIDEBAR_STORAGE_KEY = 'sidebar'

export const useSidebar = (): SidebarStore => {
  const [isOpen, setIsOpenState] = useState<boolean>(true)
  const [isHover, setIsHoverState] = useState<boolean>(false)
  const [settings, setSettingsState] = useState<SidebarSettings>({
    disabled: false,
    isHoverOpen: false,
  })

  // Cargar el estado desde localStorage al montar el componente
  useEffect(() => {
    const storedSidebar = localStorage.getItem(SIDEBAR_STORAGE_KEY)
    if (storedSidebar) {
      const parsedSidebar = JSON.parse(storedSidebar)
      setIsOpenState(parsedSidebar.isOpen)
      setIsHoverState(parsedSidebar.isHover)
      setSettingsState(parsedSidebar.settings)
    }
  }, [])

  // Guardar en localStorage cada vez que cambie el estado
  useEffect(() => {
    const sidebarState = { isOpen, isHover, settings }
    localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(sidebarState))
  }, [isOpen, isHover, settings])

  const toggleOpen = () => {
    setIsOpenState(!isOpen)
  }

  const setIsOpen = (newIsOpen: boolean) => {
    setIsOpenState(newIsOpen)
  }

  const setIsHover = (newIsHover: boolean) => {
    setIsHoverState(newIsHover)
  }

  const getOpenState = (): boolean => {
    return isOpen || (settings.isHoverOpen && isHover)
  }

  const setSettings = (newSettings: Partial<SidebarSettings>) => {
    setSettingsState((prevSettings) => ({
      ...prevSettings,
      ...newSettings,
    }))
  }

  return {
    isOpen,
    isHover,
    settings,
    toggleOpen,
    setIsOpen,
    setIsHover,
    getOpenState,
    setSettings,
  }
}
