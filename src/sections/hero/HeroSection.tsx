import { FunctionComponent } from "react";
import { Section } from "@/components/section/Section";

type HeroSectionProps = {};
export const HeroSection: FunctionComponent<HeroSectionProps> = ({
  ...props
}) => {
  return (
    <Section id="home" style={{ height: "100dvh" }}>
      <h1 className="bg-tertiary">Hero Section</h1>
    </Section>
  );
};
