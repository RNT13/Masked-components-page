
'use client'

import { useState } from 'react'

import { DemoCard } from '@/components/layout/DemoCard/DemoCard'
import { DemoStack, InfoNote, PreviewRow } from '@/components/layout/DemoCard/DemoCard.styles'
import { SectionShell } from '@/components/layout/SectionShell/SectionShell'
import { MaskedButton } from '../MaskedButton/MaskedButton'
import { MaskedDrawer } from '../MaskedDrawer/MaskedDrawer'
import { DRAWER_WIDTH_PRESETS } from '../MaskedDrawer/MaskedDrawer.types'
import { MaskedPopup } from '../MaskedPopup/MaskedPopup'
import { MaskedSkeleton } from '../MaskedSkeleton/MaskedSkeleton'
import { toast } from '../MaskedToaster/toast'
import { SkeletonCard, SkeletonRow } from './OverlaySection.styles'
import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'

type DrawerSide = 'left' | 'right' | 'top' | 'bottom'
type PopupTransition = 'pop' | 'fade' | 'slide-up' | 'blur'

type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

/* ---------- code shown ---------- */

const drawerCode = `const [open, setOpen] = useState(false)

<MaskedDrawer
  isOpen={open}
  onClose={() => setOpen(false)}
  side="right"                        // left | right | top | bottom
  width={DRAWER_WIDTH_PRESETS.narrow} // responsive preset
  transition="premium"
  overlayBlur
>
  <h4>Menu</h4>
</MaskedDrawer>`

const popupCode = `<MaskedPopup
  isOpen={open}
  onClose={() => setOpen(false)}
  transition="pop"   // pop | fade | slide-up | blur
  maxWidth="420px"
  overlayBlur
>
  <h4>Confirmation</h4>
</MaskedPopup>`

const skeletonCode = `<MaskedSkeleton circle width={48} height={48} />
<MaskedSkeleton height={14} width="70%" />
<MaskedSkeleton height={120} radius={16} animation="pulse" />`

const toastCode = `import { toast } from 'masked-toaster'

toast('Default notification')
toast.success('Profile saved')
toast.error('Could not save')
toast.info('New version available')
toast.warning('Storage almost full')
toast.loading('Uploading...')`

const toastAdvancedCode = `// promise-aware: loading -> success/error on the same toast
toast.promise(save(), {
  loading: 'Saving...',
  success: 'Saved!',
  error: 'Failed to save'
})

// action button + custom position + manual dismiss
const id = toast.info('Update ready', {
  position: 'top-center',
  duration: Infinity,
  action: { label: 'Reload', onClick: () => location.reload() }
})
toast.dismiss(id)

// <MaskedToaster position="bottom-right" max={5} /> in providers`

const positionsCode = `// 6 fixed regions; each toast can override the default position

toast.info('top-left',      { position: 'top-left' })
toast.info('top-center',    { position: 'top-center' })
toast.info('top-right',     { position: 'top-right' })

toast.info('bottom-left',   { position: 'bottom-left' })
toast.info('bottom-center', { position: 'bottom-center' })
toast.info('bottom-right',  { position: 'bottom-right' })

// <MaskedToaster position="bottom-right" /> defines the default;
// toasts without position use it.
// offset, gap and max are also configured on the toaster.`

const toastPositions: ToastPosition[] = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right'
]

/* ---------- component ---------- */

export default function OverlaySection() {
  const [drawer, setDrawer] = useState<{ open: boolean; side: DrawerSide }>({
    open: false,
    side: 'right'
  })

  const [popup, setPopup] = useState<{ open: boolean; transition: PopupTransition }>({
    open: false,
    transition: 'pop'
  })

  const openDrawer = (side: DrawerSide) => () => setDrawer({ open: true, side })

  const openPopup = (transition: PopupTransition) => () => setPopup({ open: true, transition })

  return (
    <SectionShell
      id="overlays"
      title="Overlays"
      description="Drawer, Popup, Skeleton and Toaster — portaled, focus-trapped and theme-aware."
    >
      <DemoStack>
        <MaskedAnimation variant="revealGlideLeft" trigger="scroll" once>
          <InfoNote>
            All overlays close on <strong>Escape</strong>, trap focus while open and return focus to the trigger on close.
          </InfoNote>
        </MaskedAnimation>

        {/* ---------- Drawer ---------- */}

        <DemoCard
          title="Drawer"
          description="Edge panel with portal, blurred overlay and responsive width presets."
          code={drawerCode}
        >
          <PreviewRow>
            {(['left', 'right', 'top', 'bottom'] as const).map((side) => (
              <MaskedButton key={side} variant="outline" size="sm" onClick={openDrawer(side)}>
                {side}
              </MaskedButton>
            ))}
          </PreviewRow>
        </DemoCard>

        {/* ---------- Popup ---------- */}

        <DemoCard title="Popup" description="Centered modal with four transitions." code={popupCode}>
          <PreviewRow>
            {(['pop', 'fade', 'slide-up', 'blur'] as const).map((transition) => (
              <MaskedButton key={transition} variant="outline" size="sm" onClick={openPopup(transition)}>
                {transition}
              </MaskedButton>
            ))}
          </PreviewRow>
        </DemoCard>

        {/* ---------- Skeleton ---------- */}

        <DemoCard title="Skeleton" description="Compose placeholders that mirror the real layout." code={skeletonCode}>
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
        </DemoCard>

        {/* ---------- Toaster basics ---------- */}

        <DemoCard
          title="Toaster — basics"
          description="One function, six types. Toasts pause on hover, are dismissible and announced via role=status/alert."
          code={toastCode}
        >
          <PreviewRow>
            <MaskedButton variant="outline" size="sm" onClick={() => toast('Default notification')}>
              default
            </MaskedButton>

            <MaskedButton variant="default" size="sm" colorTheme="baseGreen" onClick={() => toast.success('Profile saved')}>
              success
            </MaskedButton>

            <MaskedButton variant="default" size="sm" colorTheme="baseRed" onClick={() => toast.error('Could not save')}>
              error
            </MaskedButton>

            <MaskedButton variant="outline" size="sm" onClick={() => toast.info('New version available')}>
              info
            </MaskedButton>

            <MaskedButton variant="outline" size="sm" onClick={() => toast.warning('Storage almost full')}>
              warning
            </MaskedButton>

            <MaskedButton variant="outline" size="sm" onClick={() => toast.loading('Uploading...')}>
              loading
            </MaskedButton>
          </PreviewRow>
        </DemoCard>

        {/* ---------- Toaster promise and actions ---------- */}

        <DemoCard
          title="Toaster — promise, action & position"
          description="toast.promise morphs loading into success/error; toasts accept actions, custom positions and manual dismiss."
          code={toastAdvancedCode}
        >
          <PreviewRow>
            <MaskedButton
              variant="default"
              size="sm"
              onClick={() =>
                toast.promise(new Promise((resolve) => setTimeout(resolve, 1400)), {
                  loading: 'Saving...',
                  success: 'Saved!',
                  error: 'Failed to save'
                })
              }
            >
              Run promise
            </MaskedButton>

            <MaskedButton
              variant="outline"
              size="sm"
              onClick={() =>
                toast.info('Update ready', {
                  position: 'top-center',
                  duration: Infinity,
                  action: {
                    label: 'Got it',
                    onClick: () => toast.dismiss()
                  }
                })
              }
            >
              With action
            </MaskedButton>

            <MaskedButton
              variant="outline"
              size="sm"
              onClick={() => toast.success('From the top', { position: 'top-center' })}
            >
              top-center
            </MaskedButton>

            <MaskedButton variant="ghost" size="sm" onClick={() => toast.clear()}>
              Clear all
            </MaskedButton>
          </PreviewRow>
        </DemoCard>

        {/* ---------- Toaster positions ---------- */}

        <DemoCard
          title="Toast positions"
          description="Six fixed regions. The toaster sets the default; each toast can override its position."
          code={positionsCode}
        >
          <PreviewRow>
            {toastPositions.map((position) => (
              <MaskedButton
                key={position}
                variant="outline"
                size="sm"
                onClick={() => toast.info(position, { position })}
              >
                {position}
              </MaskedButton>
            ))}
          </PreviewRow>
        </DemoCard>
      </DemoStack>

      {/* ---------- live overlays ---------- */}

      <MaskedDrawer
        isOpen={drawer.open}
        onClose={() => setDrawer((current) => ({ ...current, open: false }))}
        side={drawer.side}
        width={DRAWER_WIDTH_PRESETS.narrow}
        transition="premium"
        overlayBlur
      >
        <h4>Menu</h4>

        <p>This drawer opens from the {drawer.side} using the narrow preset.</p>

        <MaskedButton variant="ghost" onClick={() => setDrawer((current) => ({ ...current, open: false }))}>
          Close
        </MaskedButton>
      </MaskedDrawer>

      <MaskedPopup
        isOpen={popup.open}
        onClose={() => setPopup((current) => ({ ...current, open: false }))}
        transition={popup.transition}
        maxWidth="420px"
        overlayBlur
      >
        <h4>Confirmation</h4>

        <p>Popup with the {popup.transition} transition — closes on Escape or overlay click.</p>

        <MaskedButton variant="default" onClick={() => setPopup((current) => ({ ...current, open: false }))}>
          Got it
        </MaskedButton>
      </MaskedPopup>
    </SectionShell>
  )
}
