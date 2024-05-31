import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "./Section";

const meta = {
  title: "Components/Section",
  component: Section,
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};
