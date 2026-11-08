'use client'

import { useState } from 'react'
import { BsLayoutSidebarInset, BsWindowStack, BsHourglassSplit } from 'react-icons/bs'

import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { TitleH3 } from '@/styles/globalStyles'
import BaseDiv from '../BaseDiv/BaseDiv'
import BaseSection from '../BaseSection/BaseSection'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import { MaskedDrawer } from '../MaskedDrawer/MaskedDrawer'
import { MaskedPopup } from '../MaskedPopup/MaskedPopup'
import { MaskedSkeleton } from '../MaskedSkeleton/MaskedSkeleton'
import { CodeBlock, DemoGrid, FieldColumn, OverlaySectionWrapper, SectionLabel, SkeletonCard, SkeletonRow } from './OverlaySection.styles'
import { DRAWER_WIDTH_PRESETS } from '../MaskedDrawer/MaskedDrawer.types'

export default function OverlaySection() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <OverlaySectionWrapper>
      <BaseSection>
        <BaseDiv>
          <MaskedAnimation variant="revealFadeInUp" trigger="scroll">
            <SectionLabel>Overlays</SectionLabel>
            <TitleH3>Drawer, Popup e Skeleton</TitleH3>
          </MaskedAnimation>

          <DemoGrid>
            {/* ---------- Drawer ---------- */}
            <FieldColumn>
              <MaskedAnimation variant="revealFadeInUp" trigger="scroll" delay={0.1}>
                <h4>
                  <BsLayoutSidebarInset /> MaskedDrawer
                </h4>
                <p>
                  Painel lateral com portal, overlay com blur, Escape para fechar e
                  tamanho responsivo por breakpoint.
                </p>
                <MaskedButton variant="default" onClick={() => setDrawerOpen(true)}>
                  Abrir drawer
                </MaskedButton>
              </MaskedAnimation>

              <CodeBlock>{`const [open, setOpen] = useState(false)

<MaskedButton onClick={() => setOpen(true)}>
  Abrir drawer
</MaskedButton>

<MaskedDrawer
  isOpen={open}
  onClose={() => setOpen(false)}
  side="right"
  width={DRAWER_WIDTH_PRESETS.narrow}
  transition="premium"
  overlayBlur
>
  <h4>Menu</h4>
  <p>Conteúdo do painel.</p>
</MaskedDrawer>`}</CodeBlock>
            </FieldColumn>

            {/* ---------- Popup ---------- */}
            <FieldColumn>
              <MaskedAnimation variant="revealFadeInUp" trigger="scroll" delay={0.2}>
                <h4>
                  <BsWindowStack /> MaskedPopup
                </h4>
                <p>
                  Modal centrado com transições pop/fade/slide-up/blur, fecha no
                  overlay e no Escape.
                </p>
                <MaskedButton variant="outline" onClick={() => setPopupOpen(true)}>
                  Abrir popup
                </MaskedButton>
              </MaskedAnimation>

              <CodeBlock>{`<MaskedPopup
  isOpen={popupOpen}
  onClose={() => setPopupOpen(false)}
  transition="pop"
  maxWidth="420px"
  overlayBlur
>
  <h4>Confirmação</h4>
  <p>Deseja continuar?</p>
</MaskedPopup>`}</CodeBlock>
            </FieldColumn>

            {/* ---------- Skeleton ---------- */}
            <FieldColumn>
              <MaskedAnimation variant="revealFadeInUp" trigger="scroll" delay={0.3}>
                <h4>
                  <BsHourglassSplit /> MaskedSkeleton
                </h4>
                <p>
                  Placeholder de carregamento com shimmer ou pulse — componha para
                  simular o layout real.
                </p>

                <SkeletonCard>
                  <SkeletonRow>
                    <MaskedSkeleton circle width={48} height={48} />
                    <div style={{ flex: 1 }}>
                      <MaskedSkeleton height={14} width="70%" />
                      <MaskedSkeleton height={12} width="45%" style={{ marginTop: 8 }} />
                    </div>
                  </SkeletonRow>
                  <MaskedSkeleton height={120} radius={16} animation="pulse" />
                  <MaskedSkeleton height={14} />
                  <MaskedSkeleton height={14} width="80%" />
                </SkeletonCard>
              </MaskedAnimation>

              <CodeBlock>{`<MaskedSkeleton circle width={48} height={48} />
<MaskedSkeleton height={14} width="70%" />
<MaskedSkeleton height={120} radius={16} animation="pulse" />`}</CodeBlock>
            </FieldColumn>
          </DemoGrid>
        </BaseDiv>
      </BaseSection>

      {/* ---------- Overlays vivos ---------- */}
      <MaskedDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        side="right"
        width={DRAWER_WIDTH_PRESETS.narrow}
        transition="premium"
        overlayBlur
      >
        <h4>Menu</h4>
        <p>Este drawer usa o preset narrow: 100% no mobile, 60% no tablet, 380px no desktop.</p>
        <MaskedButton variant="ghost" onClick={() => setDrawerOpen(false)}>
          Fechar
        </MaskedButton>
      </MaskedDrawer>

      <MaskedPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        transition="pop"
        maxWidth="420px"
        overlayBlur
      >
        <h4>Confirmação</h4>
        <p>Popup com transição pop, blur no overlay e fechamento por Escape ou clique fora.</p>
        <MaskedButton variant="default" onClick={() => setPopupOpen(false)}>
          Entendi
        </MaskedButton>
      </MaskedPopup>
    </OverlaySectionWrapper>
  )
}
