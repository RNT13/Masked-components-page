import { BaseDivContainer, BaseDivContent } from "./BaseDiv.styles"

type Props = {
  children: React.ReactNode
  direction?: 'row' | 'column'
}

export default function BaseDiv({ children, direction }: Props) {
  return (
    <BaseDivContainer>
      <BaseDivContent $direction={direction} >
        {children}
      </BaseDivContent>
    </BaseDivContainer>
  )
}
