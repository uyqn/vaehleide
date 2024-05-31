import { FunctionComponent } from "react";
import { Section } from "@/components/section/Section";
import "./HistorySection.css";

type HistorySectionProps = {};
export const HistorySection: FunctionComponent<HistorySectionProps> = ({
  ...props
}) => {
  return (
    <Section id="history">
      <h1>Vår historie</h1>
      <p>
        Vår historie En vakker høstdag i 2018 bestemte vi oss for å sjekke
        Tinder. Vi swipet og swipet til vi fant en vi likte. Vi swipet til høyre
        og ventet spent på svar. Det ble MATCH! Første date var på Hotel Bristol
        på afternoon tea, der vi raskt fant tonen. Alt var så naturlig,
        avslappet og godt. Det var virkelig en match. Og Tom, han var litt av en
        catch. Vi flyttet sammen kort tid etter, og 5 år senere stiftet vi en
        familie. 3. august skal vi stå foran kjente og kjære og gi hverandre
        vårt "ja"! Bli med på gleden og feiringen.
      </p>
    </Section>
  );
};
