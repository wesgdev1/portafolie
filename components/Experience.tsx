import { Title } from "./Title";
import { MdOutlineDeveloperMode, MdWork } from "react-icons/md";
import { HiMiniServerStack } from "react-icons/hi2";

import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiencia" icon={<MdWork />} />
      <div className="grid grid-cols-2 gap-6">
        <ExperienceCard
          title="No Country"
          subTitle="Backend Developer - Simulacion Laboral - 2024"
          icon={<MdOutlineDeveloperMode />}
        />
        <ExperienceCard
          title="Make it Real"
          subTitle="Full stack web developer 2023 -2024"
          icon={<MdOutlineDeveloperMode />}
        />
        <ExperienceCard
          title="Prolink"
          subTitle="Administrador TI"
          icon={<HiMiniServerStack />}
        />
        <ExperienceCard
          title="Emsitel"
          subTitle="Administrador TI"
          icon={<HiMiniServerStack />}
        />
      </div>
    </div>
  );
};
