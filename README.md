# ✨ Masked Components — Website

Documentação interativa e playground oficial do **Masked Components**, uma biblioteca de componentes polimórficos desenvolvidos com **React, TypeScript e styled-components**.

Explore demonstrações, experimente propriedades em tempo real e consulte exemplos de implementação dos componentes que podem ser instalados diretamente no seu projeto com um único comando.

🌐 **Website:** https://masked-components.vercel.app/

📦 **Instalação:**

```bash
npx masked-components
```

> **Importante:** o Masked Components CLI não cria um novo projeto. Ele instala componentes e recursos diretamente em um projeto React + TypeScript existente, copiando os arquivos-fonte e instalando as dependências necessárias com o gerenciador de pacotes utilizado. Arquivos existentes não são sobrescritos, a menos que a opção `--force` seja utilizada.

---

## 📖 Índice

1. [Sobre o projeto](#-1-sobre-o-projeto)
2. [Componentes e recursos disponíveis](#-2-componentes-e-recursos-disponíveis)
3. [Tecnologias utilizadas](#-3-tecnologias-utilizadas)
4. [Começando](#-4-começando)
5. [Atualizando os componentes](#-5-atualizando-os-componentes)
6. [Estrutura do projeto](#-6-estrutura-do-projeto)
7. [Contribuindo](#-7-contribuindo)
8. [Autor](#-8-autor)
9. [Licença](#-9-licença)

---

## ✅ 1. Sobre o projeto

Este repositório contém a aplicação **Next.js** responsável pelo website oficial do Masked Components.

O site funciona como uma vitrine interativa da biblioteca, oferecendo:

- Documentação dos componentes e suas propriedades.
- Demonstrações práticas e exemplos de utilização.
- Playground para experimentar diferentes configurações.
- Visualização de variantes, aparências e comportamentos.
- Demonstrações do sistema de temas e personalização visual.

### Relação entre o website e o CLI

Os componentes apresentados no website são cópias dos templates disponibilizados pelo repositório do CLI.

**O repositório do CLI é a fonte oficial dos componentes.** Toda correção ou implementação deve começar nele e, posteriormente, ser sincronizada com este projeto.

| Repositório              | Responsabilidade                                                     |
| ------------------------ | -------------------------------------------------------------------- |
| `masked-components-cli`  | Código-fonte oficial, templates, instalação e testes dos componentes |
| `Masked-components-page` | Documentação, demonstrações, playground e interface do website       |

Essa separação mantém os componentes instaláveis independentes da aplicação de documentação.

---

## ✅ 2. Componentes e recursos disponíveis

O Masked Components reúne componentes reutilizáveis e personalizáveis para diferentes necessidades de interfaces React.

### MaskedButton

Conjunto de botões com diferentes estilos e comportamentos:

- `default`
- `outline`
- `ghost`
- `soft`
- `link`
- `gradient`
- `neon`
- `toggle`
- `switch`
- `checkbox`
- `radio`
- `MaskedButtonGroup`

### MaskedInput

Componentes de entrada de dados com diferentes formatos e funcionalidades:

- `default`
- `masked`
- `password`
- `search`
- `select`
- `textarea`
- `time`
- `currency`
- `file`

### MaskedCards

Coleção de cards polimórficos com **11 variantes**, seis aparências e cinco layouts.

**Variantes:**

- `metric`
- `stat`
- `compare`
- `product`
- `feature`
- `plan`
- `profile`
- `article`
- `service`
- `testimonial`
- `pricing`

**Recursos:**

- Aparências: `elevated`, `filled`, `outlined`, `flat`, `gradient` e `glass`.
- Layouts: `vertical`, `horizontal`, `split`, `overlay` e `compact`.
- Proporções de mídia configuráveis.
- Seleção individual e em grupo com `MaskedCardGroup`.
- Comportamento expansível.
- Componentes de composição livre.
- Personalização por tokens e temas.
- Acessibilidade e navegação por teclado.

### Outros componentes

| Componente        | Descrição                                                  |
| ----------------- | ---------------------------------------------------------- |
| `MaskedDrawer`    | Painéis laterais com diferentes comportamentos de abertura |
| `MaskedPopup`     | Componentes de popup e sobreposição                        |
| `MaskedSkeleton`  | Indicadores visuais de carregamento                        |
| `MaskedToaster`   | Notificações e mensagens temporárias                       |
| `MaskedAnimation` | Animações de entrada, contínuas, controladas e one-shot    |

O identificador correspondente às animações no registry do CLI é `masked-animations`.

### Utilitários, hooks e configuração

Além dos componentes visuais, o CLI disponibiliza recursos auxiliares para facilitar a integração e a reutilização de funcionalidades nos projetos.

| Recurso             | Finalidade                                               |
| ------------------- | -------------------------------------------------------- |
| `masked-utils`      | Funções utilitárias reutilizáveis                        |
| `masked-hooks`      | Hooks personalizados para aplicações React               |
| `masked-hooks-next` | Hooks e integrações específicas para Next.js             |
| `masked-config`     | Configuração compartilhada e recursos do Config Provider |

### Theme Engine

Sistema de temas para personalização visual dos componentes.

O projeto disponibiliza **14 temas nomeados**, incluindo `dark`, `light`, `slate`, `midnight`, `ocean`, `forest`, `mint`, `aurora`, `rose`, `sunset`, `mocha`, `sand`, `dracula` e `cyberpunk`.

Além deles, o módulo exporta `maskedTheme` como tema padrão e também `accentTheme` e `pastelTheme`.

**Recursos:**

- Mais de dez temas prontos.
- Alternância de tema em tempo de execução.
- Personalização por `colorTheme`.
- Tokens CSS com prefixo `--mc-*`.
- Integração com o sistema de temas do projeto.
- Personalização global e por componente.

Para consultar a lista exata e atualizada de componentes, recursos e identificadores disponíveis no CLI:

```bash
npx masked-components --list
```

---

## ✅ 3. Tecnologias utilizadas

O projeto utiliza tecnologias do ecossistema React para oferecer uma aplicação organizada, tipada e de fácil manutenção.

| Tecnologia            | Finalidade                               |
| --------------------- | ---------------------------------------- |
| Next.js               | Framework da aplicação e App Router      |
| React                 | Construção das interfaces                |
| TypeScript            | Tipagem estática e segurança do código   |
| styled-components     | Estilização e componentes visuais        |
| Jest                  | Execução dos testes automatizados        |
| Testing Library       | Testes de componentes e interações       |
| Masked Components CLI | Instalação e atualização dos componentes |

### Providers e temas

Os componentes podem ser utilizados sem depender de um provider global.

O sistema de temas disponibiliza recursos para personalização e alternância de temas em tempo de execução, permitindo integrar os componentes à identidade visual de diferentes aplicações.

---

## ✅ 4. Começando

### Pré-requisitos

Antes de executar o projeto, certifique-se de possuir:

- Node.js instalado.
- npm ou outro gerenciador de pacotes compatível.
- Git para clonar o repositório.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/RNT13/Masked-components-page.git
```

Entre na pasta do projeto:

```bash
cd Masked-components-page
```

Instale as dependências:

```bash
npm install
```

### Executando em desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

### Scripts disponíveis

| Comando             | Descrição                                 |
| ------------------- | ----------------------------------------- |
| `npm run dev`       | Inicia o servidor de desenvolvimento      |
| `npm run typecheck` | Executa a verificação de tipos TypeScript |
| `npm test`          | Executa os testes automatizados com Jest  |
| `npm run build`     | Gera a versão de produção                 |

---

## ✅ 5. Atualizando os componentes

O pacote `masked-components` é utilizado como dependência de desenvolvimento para instalar e atualizar os templates presentes no website.

Como o CLI é a fonte oficial dos componentes, mantenha os arquivos de `src/components/ui` sincronizados com a versão publicada do pacote.

### Atualizar o CLI

```bash
npm update masked-components
```

### Reinstalar os componentes

```bash
npx masked-components --force
```

A opção `--force` permite sobrescrever os arquivos existentes com os templates da versão instalada.

> **Recomendação:** antes de executar a reinstalação, faça um commit no Git. Assim, você poderá revisar as alterações e recuperar facilmente qualquer modificação local.

### Fluxo de sincronização

```text
Repositório do CLI
       │
       ▼
Atualização dos templates
       │
       ▼
Publicação da nova versão
       │
       ▼
Atualização do pacote no website
       │
       ▼
Reinstalação dos componentes
       │
       ▼
Testes e validação
       │
       ▼
Website atualizado
```

---

## ✅ 6. Estrutura do projeto

A aplicação segue a organização do Next.js com App Router, separando páginas, componentes de layout, componentes da biblioteca, estilos, utilitários e hooks.

```text
src/
├── app/
│   └── ...
│
├── components/
│   ├── layout/
│   │   ├── Tabs/
│   │   ├── Panel/
│   │   ├── Stage/
│   │   ├── SectionShell/
│   │   └── CodeBlock/
│   │
│   └── ui/
│       ├── MaskedButton/
│       ├── MaskedInput/
│       ├── MaskedCards/
│       ├── MaskedDrawer/
│       ├── MaskedPopup/
│       ├── MaskedSkeleton/
│       ├── MaskedToaster/
│       └── ...
│
├── styles/
│   ├── MaskedThemes/
│   ├── MaskedAnimations/
│   └── ThemeEngine/
│
├── utils/
│   └── masked-utils/
│
└── hooks/
    └── ...
```

**Responsabilidades principais:**

| Diretório               | Responsabilidade                                |
| ----------------------- | ----------------------------------------------- |
| `src/app`               | Páginas, rotas e estrutura da aplicação         |
| `src/components/layout` | Componentes estruturais utilizados pelo website |
| `src/components/ui`     | Componentes da biblioteca instalados pelo CLI   |
| `src/styles`            | Temas, animações e sistema de estilos           |
| `src/utils`             | Funções utilitárias reutilizáveis               |
| `src/hooks`             | Hooks personalizados                            |

> A estrutura acima apresenta a organização principal do website. Os recursos `masked-config`, `masked-hooks` e `masked-hooks-next` são identificadores de recursos disponibilizados pelo CLI; seus destinos de instalação devem ser consultados nos respectivos templates e no registry.

---

## ✅ 7. Contribuindo

Contribuições, correções e melhorias são bem-vindas.

Para preservar a consistência entre o CLI e o website, siga o fluxo de desenvolvimento abaixo ao modificar um componente da biblioteca.

### Fluxo recomendado

1. Identifique o componente que precisa de correção ou melhoria.
2. Acesse o repositório `masked-components-cli`.
3. Faça a alteração nos templates oficiais.
4. Atualize ou crie os testes correspondentes.
5. Execute a validação do CLI.
6. Espelhe a mesma alteração em `src/components/ui` neste repositório.
7. Execute a validação do website.
8. Revise as demonstrações e a documentação relacionadas ao componente.

### Validação do CLI

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

### Validação do website

```bash
npm run typecheck
npm test
npm run build
```

**Importante:** não implemente uma correção diretamente no website sem atualizar também os templates oficiais do CLI. Isso evita divergências entre os componentes demonstrados e os componentes efetivamente instalados pelos usuários.

---

## ✅ 8. Autor

Desenvolvido por **Renato Minoita**.

- GitHub: [RNT13](https://github.com/RNT13)

---

## ✅ 9. Licença

Este projeto está licenciado sob a licença **MIT**.

Copyright © 2026 Renato Minoita.

Consulte o arquivo `LICENSE` para obter os termos completos da licença.
