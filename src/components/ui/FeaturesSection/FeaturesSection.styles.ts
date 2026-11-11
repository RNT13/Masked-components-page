import { media } from '@/styles/MaskedThemes/MaskedThemes'
import styled from 'styled-components'

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`

export const BlockTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.textColor ?? 'inherit'};
`

export const TileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

export const Tile = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.secondaryColor ?? 'transparent'};
  transition:
    transform 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.accentColor ?? 'currentColor'};
  }

  ${media.reducedMotion} {
    transition: border-color 0.25s ease;
    &:hover {
      transform: none;
    }
  }
`

export const TileIcon = styled.span`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.tertiaryColor ?? 'transparent'};
  color: ${({ theme }) => theme.colors.accentColor ?? 'inherit'};
  font-size: 1.25rem;
`

export const TileTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textColor ?? 'inherit'};
`

export const TileText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted ?? 'inherit'};
`

export const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: stretch;
`

export const CatalogCard = styled.article`
  height: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.secondaryColor ?? 'transparent'};
`

export const CatalogHead = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
`

export const CatalogName = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.textColor ?? 'inherit'};
`

export const Badge = styled.span`
  flex: none;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 700;
  background: ${({ theme }) => theme.colors.tertiaryColor ?? 'transparent'};
  color: ${({ theme }) => theme.colors.accentColor ?? 'inherit'};
`

export const Highlights = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  padding-left: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted ?? 'inherit'};
`

export const InstallLine = styled.code`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.tertiaryColor ?? 'transparent'};
  color: ${({ theme }) => theme.colors.textColor ?? 'inherit'};
  font-size: ${({ theme }) => theme.fontSize.xs};
  overflow-x: auto;
  white-space: nowrap;
`
