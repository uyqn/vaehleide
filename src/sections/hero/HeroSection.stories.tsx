import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "./HeroSection";

const meta = {
  title: "Components/HeroSection",
  component: HeroSection,
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};
