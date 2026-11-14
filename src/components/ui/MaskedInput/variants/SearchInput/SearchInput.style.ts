import { maskedTheme, media } from '@/styles/MaskedThemes/MaskedThemes'
import styled from 'styled-components'

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${maskedTheme.spacing.sm};
  width: 100%;
`

export const FiltersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${maskedTheme.spacing.md};
  padding-top: ${maskedTheme.spacing.md};

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`

export const FilterGroupLabel = styled.span`
  display: block;
  font-size: ${maskedTheme.fontSize.xs};
  font-weight: ${maskedTheme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textMuted ?? maskedTheme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: ${maskedTheme.spacing.xs};
`

export const FilterChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${maskedTheme.spacing.xs};
`

export const DateChipRow = styled(FilterChipRow)``
export const SortChipRow = styled(FilterChipRow)``

const chipBase = `
  border-radius: 999px;
  padding: 0.45rem 0.85rem;
  min-height: 36px;
  font-size: ${maskedTheme.fontSize.xs};
  font-weight: ${maskedTheme.fontWeight.bold};
  cursor: pointer;
  transition: ${maskedTheme.transition.slow};
  white-space: nowrap;
`

export const FilterChip = styled.button<{ $active: boolean }>`
  ${chipBase}
  border: 1px solid ${({ $active, theme }) =>
    $active ? (theme.colors.accentColor ?? maskedTheme.colors.baseBlue.base) : (theme.colors.borderColor ?? maskedTheme.colors.borderColor)};
  background: ${({ $active, theme }) =>
    $active ? (theme.colors.accentColor ?? maskedTheme.colors.baseBlue.base) : (theme.colors.secondaryColor ?? maskedTheme.colors.secondaryColor)};
  color: ${({ $active, theme }) =>
    $active ? (theme.colors.basePureWhite?.base ?? '#fff') : (theme.colors.textColor ?? maskedTheme.colors.textColor)};
  box-shadow: ${({ $active, theme }) => ($active ? `0 6px 18px ${theme.colors.accentColor ?? maskedTheme.colors.baseBlue.light20}` : 'none')};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentColor ?? maskedTheme.colors.baseBlue.base};
    transform: translateY(-1px);
  }
`

export const DateChip = styled(FilterChip)``
export const SortChip = styled(FilterChip)``

export const ResultsCount = styled.span`
  padding: ${maskedTheme.spacing.sm} 0;
  font-size: ${maskedTheme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted ?? maskedTheme.colors.textMuted};
`
