"use client";
import {
  DetailedHTMLProps,
  FunctionComponent,
  HTMLAttributes,
  useEffect,
} from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRouter } from "next/router";

type SectionProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
  "ref"
>;
export const Section: FunctionComponent<SectionProps> = ({
  id,
  children,
  ...props
}) => {
  const { ref, isVisible } = useIntersectionObserver();
  useEffect(() => {
    if (typeof id === "string" && isVisible) {
      window.location.hash = id;
    }
  }, [id, isVisible]);
  return (
    <section id={id} ref={ref} {...props}>
      {children}
    </section>
  );
};
