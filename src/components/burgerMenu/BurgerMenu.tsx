import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  MouseEventHandler,
  useCallback,
  useState,
} from "react";
import { AnimationProps, motion } from "framer-motion";
import "./BurgerMenu.css";
import classNames from "classnames";

type BurgerMenuProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { open?: boolean };

export const BurgerMenu: FunctionComponent<BurgerMenuProps> = ({
  open,
  ...props
}) => {
  return (
    <button
      className={classNames("flex flex-col gap-1", props.className)}
      {...props}
    >
      <BurgerLine rotate={open ? 45 : 0} translateY={open ? "8px" : 0} />
      <BurgerLine opacity={open ? 0 : 1} />
      <BurgerLine rotate={open ? -45 : 0} translateY={open ? "-8px" : 0} />
    </button>
  );
};

type BurgerLineProps = AnimationProps;
const BurgerLine: FunctionComponent<AnimationProps["animate"]> = (props) => {
  return <motion.div className="bg-primary w-12 h-1" animate={props} />;
};
