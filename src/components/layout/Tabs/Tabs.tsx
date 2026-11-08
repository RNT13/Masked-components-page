'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { TabList, Tab, TabPanel } from './Tabs.styles';

export type TabItem = { id: string; label: string; panel: ReactNode }

type TabsProps = {
  items: TabItem[]
  defaultTab?: string
  /** sincroniza a aba ativa com location.hash (ex.: #buttons) */
  syncHash?: boolean
  ariaLabel: string
}

export function Tabs({ items, defaultTab, syncHash, ariaLabel }: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? items[0]?.id)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!syncHash) return
    const apply = () => {
      const hash = window.location.hash.replace('#', '')
      if (items.some(i => i.id === hash)) setActive(hash)
    }
    apply()
    window.addEventListener('hashchange', apply)
    return () => window.removeEventListener('hashchange', apply)
  }, [items, syncHash])

  const select = useCallback(
    (id: string, focus = false) => {
      setActive(id)
      if (syncHash) window.history.replaceState(null, '', `#${id}`)
      if (focus) listRef.current?.querySelector<HTMLButtonElement>(`#tab-${id}`)?.focus()
    },
    [syncHash]
  )

  const onKeyDown = (e: React.KeyboardEvent) => {
    const idx = items.findIndex(i => i.id === active)
    const last = items.length - 1
    const next =
      e.key === 'ArrowRight' ? Math.min(idx + 1, last)
        : e.key === 'ArrowLeft' ? Math.max(idx - 1, 0)
          : e.key === 'Home' ? 0
            : e.key === 'End' ? last
              : null
    if (next !== null) {
      e.preventDefault()
      select(items[next].id, true)
    }
  }

  const current = items.find(i => i.id === active)

  return (
    <>
      <TabList ref={listRef} role="tablist" aria-label={ariaLabel} onKeyDown={onKeyDown}>
        {items.map(item => (
          <Tab
            key={item.id}
            id={`tab-${item.id}`}
            role="tab"
            type="button"
            aria-selected={item.id === active}
            aria-controls={`panel-${item.id}`}
            tabIndex={item.id === active ? 0 : -1}
            onClick={() => select(item.id)}
          >
            {item.label}
          </Tab>
        ))}
      </TabList>
      {current && (
        <TabPanel
          id={`panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          tabIndex={0}
        >
          {current.panel}
        </TabPanel>
      )}
    </>
  )
}
