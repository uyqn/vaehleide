import { FunctionComponent } from "react";
import { BurgerMenu } from "@/components/burgerMenu/BurgerMenu";

type NavigationBarProps = {};
export const NavigationBar: FunctionComponent<NavigationBarProps> = ({
  ...props
}) => {
  return (
    <nav className="flex flex-col items-center border border-solid border-black h-full p-4">
      <BurgerMenu />
      <ul className="flex flex-col justify-evenly items-center font-nav p-4 h-full">
        <li>HJEM</li>
        <li>VÅR HISTORIE</li>
        <li>BRYLLUPET</li>
        <li>TRANSPORT</li>
        <li>BILDER</li>
        <li>GAVELISTE</li>
      </ul>
    </nav>
  );
};
