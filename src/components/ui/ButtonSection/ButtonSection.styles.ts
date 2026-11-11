import styled from 'styled-components'

export const SwatchRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

/* 36px visuais + 6px de área de toque extra de cada lado = 48px */
export const Swatch = styled.button<{ $color: string; $active: boolean }>`
  position: relative;
  width: 36px;
  height: 36px;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ $color }) => $color};
  border: 2px solid ${({ theme }) => theme.colors.borderColor ?? 'transparent'};
  box-shadow: ${({ $active, theme }) => ($active ? `0 0 0 3px ${theme.colors.accentColor ?? '#fff'}` : 'none')};
  transition: transform 0.15s ease;

  &::after {
    content: '';
    position: absolute;
    inset: -6px;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accentColor ?? '#fff'};
    outline-offset: 4px;
  }
`

export const CustomColor = styled.label`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted ?? 'inherit'};
  cursor: pointer;

  input {
    width: 44px;
    height: 44px;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
  }
`
