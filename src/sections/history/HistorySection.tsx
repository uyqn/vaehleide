"use client";
import { FunctionComponent } from "react";
import { Section } from "@/components/section/Section";

type HistorySectionProps = {};
export const HistorySection: FunctionComponent<HistorySectionProps> = ({
  ...props
}) => {
  return (
    <Section id="history" style={{ height: "100dvh" }}>
      <h1 className="bg-primary">History Section</h1>
    </Section>
  );
};
