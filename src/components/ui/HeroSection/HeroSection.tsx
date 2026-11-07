'use client'

import { BsStars } from 'react-icons/bs'
import { RiDownload2Line, RiGithubLine } from 'react-icons/ri'
import styled from 'styled-components'

import { MaskedAnimation } from '@/styles/MaskedAnimations/MaskedAnimation'
import { MaskedButton } from '@/components/ui/MaskedButton/MaskedButton'

/* ================= Estilos ================= */

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  min-height: 80vh;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.accentColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background: ${({ theme }) => theme.colors.surfaceColor};
`

const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.05;
  max-width: 16ch;
  color: ${({ theme }) => theme.colors.textColor};

  .accent {
    background: linear-gradient(
      120deg,
      ${({ theme }) => theme.colors.accentBlue?.base ?? '#00E5FF'},
      ${({ theme }) => theme.colors.accentPink?.base ?? '#FF2DAA'}
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 56ch;
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
`

/* ================= Componente ================= */

export default function HeroSection() {
  return (
    <HeroWrapper>
      {/* Entrada escalonada: cada bloco sobe com fade ao montar */}
      <MaskedAnimation variant="revealFadeInDown" trigger="mount">
        <Badge>
          <BsStars /> masked-components 2.0 — agora com tokens CSS
        </Badge>
      </MaskedAnimation>

      <MaskedAnimation variant="revealFadeInUp" trigger="mount" delay={120}>
        <Title>
          Componentes <span className="accent">masked</span> prontos para produção
        </Title>
      </MaskedAnimation>

      <MaskedAnimation variant="revealFadeInUp" trigger="mount" delay={240}>
        <Subtitle>
          Botões, inputs, cards, drawers e animações com temas via{' '}
          <code>colorTheme</code> e overrides granulares via <code>tokens</code>.
          Instale só o que precisar com <code>npx masked-components-cli</code>.
        </Subtitle>
      </MaskedAnimation>

      <MaskedAnimation variant="revealFadeInUp" trigger="mount" delay={360}>
        <Actions>
          {/* CTA principal: variant gradient + tooltip via label */}
          <MaskedButton
            variant="gradient"
            size="lg"
            shape="rounded"
            href="#install"
            label="Ver instalação"
            leftIcon={<RiDownload2Line />}
          >
            Começar agora
          </MaskedButton>

          {/* Secundário: neon com paleta accent */}
          <MaskedButton
            variant="neon"
            size="lg"
            shape="rounded"
            colorTheme="accentBlue"
            href="#components"
            label="Explorar a lib"
          >
            Ver componentes
          </MaskedButton>

          {/* Terciário: ghost + link externo */}
          <MaskedButton
            variant="ghost"
            size="lg"
            href="https://github.com/RNT13/masked-components-cli"
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<RiGithubLine />}
            ariaLabel="Repositório no GitHub"
          >
            GitHub
          </MaskedButton>
        </Actions>
      </MaskedAnimation>
    </HeroWrapper>
  )
}
