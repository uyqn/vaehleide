import type { Meta, StoryObj } from "@storybook/react";
import { InformationSection } from "./InformationSection";

const meta = {
  title: "Components/InformationSection",
  component: InformationSection,
} satisfies Meta<typeof InformationSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};
