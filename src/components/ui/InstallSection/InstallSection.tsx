import { FaBox } from "react-icons/fa6";
import BaseSection from "../BaseSection/BaseSection";
import { InstallSectionContainer, InstallSectionContent } from "./InstallSection.styles";

export default function InstallSection() {
  return (
    <InstallSectionContainer>
      <InstallSectionContent>

        <BaseSection
          id="install"
          header
          icon={<FaBox />}
          title="Installation"
          fileType="bash"
          description="Start using Masked Components in your project with a simple command."
          content1="npx masked-components-cli"
        />

      </InstallSectionContent>
    </InstallSectionContainer>
  )
}
