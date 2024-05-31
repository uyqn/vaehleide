import type { Meta, StoryObj } from "@storybook/react";
import { HistorySection } from "./HistorySection";

const meta = {
  title: "Components/HistorySection",
  component: HistorySection,
} satisfies Meta<typeof HistorySection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};
