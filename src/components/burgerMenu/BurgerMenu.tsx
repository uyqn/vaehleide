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
>;

export const BurgerMenu: FunctionComponent<BurgerMenuProps> = ({
  ...props
}) => {
  const [active, setActive] = useState(false);

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      setActive((prevState) => !prevState);
      props.onClick?.(event);
    },
    [props],
  );

  return (
    <button
      className={classNames("flex flex-col gap-1", props.className)}
      onClick={handleOnClick}
      {...props}
    >
      <BurgerLine rotate={active ? 45 : 0} translateY={active ? "8px" : 0} />
      <BurgerLine opacity={active ? 0 : 1} />
      <BurgerLine rotate={active ? -45 : 0} translateY={active ? "-8px" : 0} />
    </button>
  );
};

type BurgerLineProps = AnimationProps;
const BurgerLine: FunctionComponent<AnimationProps["animate"]> = (props) => {
  return <motion.div className="bg-primary w-12 h-1" animate={props} />;
};
