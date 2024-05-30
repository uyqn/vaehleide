import type { Meta, StoryObj } from "@storybook/react";
import { BurgerMenu } from "./BurgerMenu";

const meta = {
  title: "Components/BurgerMenu",
  component: BurgerMenu,
} satisfies Meta<typeof BurgerMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};
