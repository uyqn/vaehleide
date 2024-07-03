import { FunctionComponent } from "react";
import { Section } from "@/components/section/Section";
import "./InformationSection.css";

type InformationSectionProps = {};
export const InformationSection: FunctionComponent<InformationSectionProps> = ({
  ...props
}) => {
  return (
    <Section id="information">
      <div id="transport">
        <h1>Transport</h1>
        <p>
          Lokalet heter Kokkeplassen og er på Hisøya i Arendal. Adressen er:{" "}
          <a>Vesterveien 132, 4817 His.</a>
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2088.293440638732!2d8.740167600000001!3d58.4390259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4647eb354f04bfd5%3A0x29621817565f0edc!2sKokkeplassen%20G%C3%A5rd%20-%20Mat%20og%20vinhuset!5e0!3m2!1sen!2sno!4v1720040334018!5m2!1sen!2sno"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p>
          Bussen stopper nesten rett utenfor og heter "Kokkeplassen". Dere kan
          ta bussene 100, 101 eller 103 for å komme dere fra Arendal sentrum til
          Kokkeplassen, eller 100 og 101 fra retning Kristiansand/Grimstad.{" "}
        </p>
      </div>
      <div id="bilder">
        <h1>Bilder</h1>
        <p>
          Vi kommer til å opprette en side der gjestene kan dele bilder fra
          festen. Linken kommer senere.
        </p>
      </div>
      <div id="food">
        <h1>Mat</h1>
        <p>
          Tema for bryllypet er sommerfest og vi kommer til å servere helstekt
          gris med grillbuffet. Vi ber om at dere gir beskjed så fort som mulig
          dersom det må bli tatt spesielle hensyn mtp mat eller allergier.
        </p>
      </div>
    </Section>
  );
};
