import { FunctionComponent } from "react";
import { Section } from "@/components/section/Section";
import Image from "next/image";
import hero from "../../../public/hero.jpg";
import "./HeroSection.css";

type HeroSectionProps = {};
export const HeroSection: FunctionComponent<HeroSectionProps> = ({
  ...props
}) => {
  return (
    <Section id="home" className="relative flex">
      <Image
        className="hero-img"
        alt="something"
        src={hero}
        width={1500}
        height={1000}
      />
      <div className="hero-card">
        <h3>Vi gifter oss!</h3>
        <h1>Tom & Mari</h1>
        <p>Delta på festlighetene</p>
        <p>3. August, 2024</p>
      </div>
    </Section>
  );
};
