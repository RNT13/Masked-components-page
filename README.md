# ✨ Masked Components: website

Live documentation and playground for **Masked Components**, a set of polymorphic React + TypeScript components that you install **into your own project** with one command.

🌐 https://masked-components.vercel.app/

```bash
npx masked-components-cli
```

> The CLI does **not** create a project. It copies component source files into an existing React + TypeScript project, installs the npm packages they need with your package manager, and never overwrites files you edited unless you pass `--force`.

---

## What is in this repository

This is the Next.js app that powers the website. The components shown here are copies of the templates that live in the CLI repository ([masked-components-cli](https://github.com/RNT13/masked-components-cli)). The CLI repository is the source of truth: fix components there first, then mirror the change here.

| Area                                                                 | Path                    |
| -------------------------------------------------------------------- | ----------------------- |
| Pages and layout                                                     | `src/app`               |
| Site layout primitives (Tabs, Panel, Stage, SectionShell, CodeBlock) | `src/components/layout` |
| Library components (the same files the CLI installs)                 | `src/components/ui`     |
| Themes, animations and Theme Engine                                  | `src/styles`            |

## Components

- **MaskedButton**: default, outline, ghost, soft, link, gradient, neon, toggle, switch, checkbox, radio (+ `MaskedButtonGroup`).
- **MaskedInput**: default, masked, password, search, select, textarea, time, currency, file.
- **MaskedCards**: metric, stat, compare, product, feature, plan.
- **MaskedDrawer**, **MaskedPopup**, **MaskedSkeleton**, **MaskedToaster**.
- **MaskedAnimation**: reveal, continuous, controlled and one-shot animations.
- **Theme Engine**: nine ready-made themes, runtime switching, `colorTheme` and `--mc-*` tokens.

Run `npx masked-components-cli --list` for the exact, current list.

## Tech stack

Next.js (App Router), React, TypeScript and styled-components. Every component works without a provider; add `ThemeEngineProvider` to switch themes at runtime.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm test           # jest
npm run build
```

## Contributing a component fix

1. Fix it in `templates/` of the CLI repository (and its tests).
2. Copy the same change into `src/components/ui` here.
3. Run `npm run typecheck && npm test` in both repositories.

## Author

Created by **Renato Minoita**: [LinkedIn](https://www.linkedin.com/in/renato-minoita/) · [GitHub](https://github.com/RNT13)

## License

MIT © 2026
