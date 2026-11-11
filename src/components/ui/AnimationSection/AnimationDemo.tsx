'use client'

import { useEffect, useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { animationRegistry, type AnimationName } from '@/styles/MaskedAnimations/AnimationRegistry'
import '@/styles/MaskedAnimations/registerAnimationProperties'
import { AnimBox, AnimCell } from './AnimationSection.styles'

export type AnimationFamily = 'reveal' | 'continuous' | 'oneShot' | 'controlled'

/** Intervalo do loop (ms). Animações longas ganham mais tempo para terminar. */
const PERIOD_OVERRIDE: Partial<Record<AnimationName, number>> = {
  oneShotRocketLaunch: 5200,
  oneShotLightningStrike: 6200
}
const PERIOD_BY_FAMILY: Record<AnimationFamily, number> = {
  reveal: 3000,
  continuous: 0, // já roda sozinha, sem parar
  oneShot: 3000,
  controlled: 2200
}

export function AnimationDemo({
  variant,
  family
}: {
  variant: AnimationName
  family: AnimationFamily
}) {
  const { ref, isVisible } = useInView<HTMLDivElement>(0.3)
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [run, setRun] = useState(0)
  const [isOn, setIsOn] = useState(true)

  const period = PERIOD_OVERRIDE[variant] ?? PERIOD_BY_FAMILY[family]
  const loops = isVisible && !reduced && period > 0

  /* loop só enquanto o card está na tela */
  useEffect(() => {
    if (!loops) return
    const id = setInterval(() => {
      if (family === 'controlled') setIsOn((v) => !v)
      else setRun((r) => r + 1)
    }, period)
    return () => clearInterval(id)
  }, [loops, family, period])

  /* passar o mouse reinicia (ou alterna, no controlled) */
  const replay = () => {
    if (family === 'controlled') setIsOn((v) => !v)
    else if (family !== 'continuous') setRun((r) => r + 1)
  }

  /* reveal/one-shot só começam quando visíveis: ninguém perde a primeira execução */
  const active = family === 'controlled' || isVisible

  return (
    <AnimCell ref={ref} $clip={family === 'reveal' || family === 'oneShot'} onMouseEnter={replay}>
      <AnimBox key={run} $anim={active ? animationRegistry[variant] : undefined} $isOn={isOn}>
        {variant}
      </AnimBox>
    </AnimCell>
  )
}
