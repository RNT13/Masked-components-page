# ✨ Masked Components CLI

A modern, type-safe and flexible component system for **Next.js + React**, designed to boost developer experience and speed up UI creation using a simple **CLI installer**.

Masked Components provides **polymorphic**, **theme-ready**, and **highly customizable** UI components with first-class **TypeScript support**.

---

## 🚀 Live Demo

👉 **Website:** https://masked-components.vercel.app/
👉 **CLI Install Command:**

```bash
npx masked-components-cli
```

---

## 📦 What is Masked Components?

Masked Components is a UI component library combined with a CLI that allows you to **install and scaffold pre-configured components** directly into your project.

It focuses on:

- Developer Experience (DX)
- Clean and scalable architecture
- Modern UI patterns
- Performance and tree-shaking

---

## 🧱 Tech Stack

- **Next.js** – Optimized routing, SSR and App Router ready
- **React** – Component-based architecture
- **TypeScript** – Strong typing and intelligent autocomplete
- **Styled Components** – Theme-driven and dynamic styling
- **React Icons** – Flexible icon support
- **IMask** – Advanced input masking
- **CLI (Node.js)** – Simple and fast installation

---

## ⚡ Installation

Install Masked Components in seconds using the CLI:

```bash
npx masked-components-cli
```

This command will:

- Create a new Next.js project
- Configure TypeScript
- Install dependencies
- Add Masked Components structure

---

## 🧩 Components Overview

### 🔘 MaskedButton

Highly customizable buttons with multiple variants, states, sizes, shapes, icons, and behaviors.

#### Variants

- `default`
- `outline`
- `ghost`
- `gradient`
- `neon`
- `link`
- `toggle`

#### States

- `default`
- `loading`
- `disabled`
- `error`
- `active`

#### Features

- Left & right icons
- Loading spinner
- Tooltip label
- Full width support
- Polymorphic (`button` or `a`)
- Toggle mode

#### Basic Example

```tsx
<MaskedButton variant="default" size="sm" leftIcon={<FaCode />}>
  Default Button
</MaskedButton>
```

---

### ⌨️ MaskedInput

Powerful input system with intelligent masks and real-time formatting.

#### Input Variants

- `default`
- `textarea`
- `masked`
- `password`
- `select`
- `file`
- `search`
- `currency`

#### Features

- Automatic masking
- Controlled & uncontrolled support
- Icons
- Validation-ready
- Cloudinary file upload support
- Currency formatting

#### Example

```tsx
<MInput variant="masked" tooltip="Phone" mask="(00) 0000-0000" placeholder="Phone number" value={value} onChange={setValue} />
```

---

## ✨ Key Features

- ✅ TypeScript Native
- ✅ Polymorphic Components
- ✅ Responsive by default
- ✅ Tree-shaking support
- ✅ Zero unnecessary dependencies
- ✅ Theme-ready styles
- ✅ Modern animations
- ✅ Accessibility-friendly
- ✅ Optimized performance

---

## 🧪 Playground

The website provides a full interactive playground where you can:

- Test all button variants
- Change states dynamically
- Try input masks in real time
- Preview sizes, shapes and icons

---

## 🛣️ Roadmap

- 🃏 Masked Cards (Coming Soon)
- 🎞️ Masked Animations (Coming Soon)
- 📚 Extended documentation
- 🧩 More components

---

## 👤 Author

Created with 💙 by **Renato Minoita**

- 💼 LinkedIn: https://www.linkedin.com/in/renato-minoita/
- 🧑‍💻 GitHub: https://github.com/RNT13

---

## 📄 License

MIT License © 2026
