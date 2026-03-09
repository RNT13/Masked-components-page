
import BaseDiv from "../BaseDiv/BaseDiv";
import { DivCardContainer, DivCardContent, DivCardIcon } from "./DivCardStyles";

type props = {
  icon?: React.ReactNode
  title?: string
  description?: string
  children?: React.ReactNode
}

export default function DivCard({ icon, title, description, children }: props) {
  return (
    <DivCardContainer>
      <DivCardContent>
        <BaseDiv direction="column">
          {title ? (
            <>
              {icon && <DivCardIcon>{icon}</DivCardIcon>}
              <h3>{title}</h3>
              <p>{description}</p>
            </>
          ) : (
            <>
              {children}
            </>
          )}
        </BaseDiv>
      </DivCardContent>
    </DivCardContainer >
  )
}
