import { useState } from 'react'

export function useHoverTrigger() {
  const [active, setActive] = useState(false)

  return {
    active,
    bind: {
      onMouseEnter: () => setActive(true),
      onMouseLeave: () => setActive(false)
    }
  }
}
