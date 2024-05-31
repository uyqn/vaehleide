"use client";
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { BurgerMenu } from "@/components/burgerMenu/BurgerMenu";
import { motion } from "framer-motion";
import classNames from "classnames";
import { useWindowWidthSizeObserver } from "@/hooks/useWindowWidthSizeObserver";

type NavigationBarProps = {};
export const NavigationBar: FunctionComponent<NavigationBarProps> = ({
  ...props
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const size = useWindowWidthSizeObserver();

  return (
    <nav className="flex flex-col z-20 items-center backdrop-blur p-4 fixed top-0 w-full shadow-sm bg-white/75 sm:flex-row">
      <BurgerMenu
        className="flex flex-col gap-1 sm:hidden"
        onClick={() => setShowMenu((prevState) => !prevState)}
      />
      <motion.ul
        className="flex flex-col justify-evenly items-center font-nav w-full overflow-hidden sm:flex-row sm:overflow-auto sm:h-auto"
        animate={{
          height:
            showMenu || size !== "sm"
              ? `${size !== "sm" ? "auto" : "100dvh"}`
              : 0,
        }}
        initial={false}
      >
        <NavLink href="#home" onClick={() => setShowMenu(false)}>
          HJEM
        </NavLink>
        <NavLink href="#history" onClick={() => setShowMenu(false)}>
          VÅR HISTORIE
        </NavLink>
        {/*<NavLink href="/" onClick={() => setShowMenu(false)}>
          BRYLLUPET
        </NavLink>
        <NavLink href="/" onClick={() => setShowMenu(false)}>
          TRANSPORT
        </NavLink>
        <NavLink href="/" onClick={() => setShowMenu(false)}>
          BILDER
        </NavLink>
        <NavLink href="/" onClick={() => setShowMenu(false)}>
          GAVELISTE
        </NavLink>*/}
      </motion.ul>
    </nav>
  );
};

type NavLinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
const NavLink: FunctionComponent<NavLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleLocationChange = () => {
      if (!href) return;

      setActive(
        href ===
          window.location.href.replace(window.location.origin, "").substring(1),
      );
    };

    window.addEventListener("popstate", handleLocationChange);
    handleLocationChange();
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [href]);

  return (
    <li
      className={classNames("hover:text-primary cursor-pointer", {
        "text-primary": active,
      })}
    >
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
};
