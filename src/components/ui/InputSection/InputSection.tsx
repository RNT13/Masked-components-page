'use client'

import { useState } from 'react'

import { DemoCard } from '@/components/layout/DemoCard/DemoCard'
import { DemoStack, InfoNote } from '@/components/layout/DemoCard/DemoCard.styles'
import { SectionShell } from '@/components/layout/SectionShell/SectionShell'
import { MaskedInput } from '../MaskedInput/MaskedInput'
import { FieldColumn } from './InputSection.styles'

/* ---------- demo data ---------- */

type Component = { name: string; category: string; status: 'stable' | 'beta' }

const COMPONENTS: Component[] = [
  { name: 'MaskedButton', category: 'buttons', status: 'stable' },
  { name: 'MaskedInput', category: 'inputs', status: 'stable' },
  { name: 'MaskedCards', category: 'cards', status: 'stable' },
  { name: 'MaskedDrawer', category: 'overlays', status: 'stable' },
  { name: 'MaskedPopup', category: 'overlays', status: 'stable' },
  { name: 'MaskedToaster', category: 'overlays', status: 'beta' },
  { name: 'MaskedSkeleton', category: 'overlays', status: 'stable' }
]

const PLAN_OPTIONS = [
  { value: 'free', label: 'Free' },
  { value: 'starter', label: 'Starter' },
  { value: 'pro', label: 'Pro' },
  { value: 'team', label: 'Team' },
  { value: 'enterprise', label: 'Enterprise' }
]

/* ---------- code shown ---------- */

const textCode = `<MaskedInput variant="default" label="Name" value={name} onChange={setName} />  
<MaskedInput variant="password" label="Password" value={pw} onChange={setPw} />`

const maskCode = `// CPF/CNPJ-style mask — '0' is a required digit slot  
<MaskedInput variant="masked" label="Document" mask="000.000.000-00" />  
<MaskedInput variant="masked" label="Birth date" mask="00/00/0000" />`

const currencyCode = `<MaskedInput  
  variant="currency" label="Price (USD)"  
  currencyConfig={{ locale: 'en-US', currency: 'USD' }}  
/>  
<MaskedInput  
  variant="currency" label="Preço (BRL)"  
  currencyConfig={{ locale: 'pt-BR', currency: 'BRL' }}  
/>`

const selectCode = `<MaskedInput  
  variant="select"  
  label="Plan"  
  options={[  
    { value: 'free', label: 'Free' },  
    { value: 'starter', label: 'Starter' },  
    { value: 'pro', label: 'Pro' },  
    { value: 'team', label: 'Team' },  
    { value: 'enterprise', label: 'Enterprise' }  
  ]}  
  value={plan}  
  onChange={setPlan}  
/>`

const timeCode = `<MaskedInput  
  variant="time"  
  label="Meeting time"  
  minuteStep={15}  
  value={time}  
  onChange={setTime}  
/>`

const searchCode = `<MaskedInput  
  variant="search"  
  label="Search components"  
  data={components}  
  searchFields={['name', 'category']}  
  filterField="status"  
  filterLabels={{ stable: 'Stable', beta: 'Beta' }}  
  filterGroupLabel="Status"  
  sortOptions={[{ key: 'name', field: 'name', label: 'Name' }]}
  sortGroupLabel="Sort by"  
>  
  {({ filteredData }) => (  
    <ul>{filteredData.map((c) => <li key={c.name}>{c.name}</li>)}</ul>  
  )}  
</MaskedInput>`

const fileCode = `<MaskedInput  
  variant="file"  
  label="Avatar"  
  fileMode="local"  
  accept="image/*"  
  maxSizeMB={2}  
  chooseFileLabel="Choose image"  
  dropHintLabel="or drop an image here"  
  onChange={(file) => setAvatar(file)}  
/>`

/* ---------- component ---------- */

export function InputSection() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [doc, setDoc] = useState('')
  const [date, setDate] = useState('')
  const [usd, setUsd] = useState('')
  const [brl, setBrl] = useState('')
  const [plan, setPlan] = useState('')
  const [time, setTime] = useState('')
  const [, setAvatar] = useState<unknown>(null)

  return (
    <SectionShell
      id="inputs"
      title="MaskedInput"
      description="One component, nine variants — same props contract (label, icon, error, colorTheme, tokens), behavior switched by the variant prop."
    >
      <DemoStack>
        <InfoNote>
          Every demo below is a real controlled input. Select and Time are fully
          keyboard-navigable; Search renders results through a render-prop.
        </InfoNote>

        <DemoCard title="Text & password" code={textCode}>
          <FieldColumn>
            <MaskedInput variant="default" label="Name" placeholder="Your name" value={name} onChange={setName} />
            <MaskedInput variant="password" label="Password" placeholder="••••••••" value={password} onChange={setPassword} />
          </FieldColumn>
        </DemoCard>

        <DemoCard title="Masked" description="Digit slots with a mask — CPF-style document and a date." code={maskCode}>
          <FieldColumn>
            <MaskedInput variant="masked" label="Document" mask="000.000.000-00" placeholder="000.000.000-00" value={doc} onChange={setDoc} />
            <MaskedInput variant="masked" label="Birth date" mask="00/00/0000" placeholder="DD/MM/YYYY" value={date} onChange={setDate} />
          </FieldColumn>
        </DemoCard>

        <DemoCard title="Currency" description="Locale-aware currency input — USD and BRL side by side." code={currencyCode}>
          <FieldColumn>
            <MaskedInput variant="currency" label="Price (USD)" value={usd} onChange={setUsd} currencyConfig={{ locale: 'en-US', currency: 'USD' }} />
            <MaskedInput variant="currency" label="Preço (BRL)" value={brl} onChange={setBrl} currencyConfig={{ locale: 'pt-BR', currency: 'BRL' }} />
          </FieldColumn>
        </DemoCard>

        <DemoCard title="Select" description="Keyboard-first listbox (arrows, Enter, Escape, typeahead)." code={selectCode}>
          <MaskedInput variant="select" label="Plan" placeholder="Choose a plan" options={PLAN_OPTIONS} value={plan} onChange={setPlan} />
        </DemoCard>

        <DemoCard title="Time" description="Hour/minute segments with a configurable step." code={timeCode}>
          {/* TODO confirm: prop name minuteStep */}
          <MaskedInput variant="time" label="Meeting time" minuteStep={15} value={time} onChange={setTime} />
        </DemoCard>

        <DemoCard title="Search" description="Smart search with status filters, sorting and a render-prop for results." code={searchCode} stacked>
          <MaskedInput
            variant="search"
            label="Search components"
            placeholder="Search..."
            data={COMPONENTS}
            searchFields={['name', 'category']}
            filterField="status"
            filterLabels={{ stable: 'Stable', beta: 'Beta' }}
            filterGroupLabel="Status"
            showDateFilter={false}
            sortOptions={[{ key: 'name', field: 'name', label: 'Name' }]}
            sortGroupLabel="Sort by"
            getItemKey={(c: Component) => c.name}
          >
            {(state) => (
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {state.filteredData.map((c: Component) => (
                  <li key={c.name}>{c.name} — {c.category}</li>
                ))}
              </ul>
            )}
          </MaskedInput>
        </DemoCard>

        <DemoCard title="File" description="Local upload with preview, drag-and-drop and a 2MB limit." code={fileCode}>
          <MaskedInput
            variant="file"
            label="Avatar"
            fileMode="local"
            accept="image/*"
            maxSizeMB={2}
            chooseFileLabel="Choose image"
            dropHintLabel="or drop an image here"
            removeLabel="Remove"
            onChange={(file: unknown) => setAvatar(file)}
          />
        </DemoCard>
      </DemoStack>
    </SectionShell>
  )
}

export default InputSection  