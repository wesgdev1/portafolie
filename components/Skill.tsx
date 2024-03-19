import { Skillinput } from "./Skillinput";
import { Title } from "./Title";
import { GiSkills } from "react-icons/gi";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";

export const Skill = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-5 flex-wrap justify-center">
        <Skillinput title="Node" icon={<FaNode />} />
        <Skillinput title="Javascript" icon={<RiJavascriptLine />} />
        <Skillinput title="Express" icon={<RiJavascriptLine />} />
        <Skillinput title="Prisma" icon={<SiPrisma />} />
        <Skillinput title="Postgresql" icon={<BiLogoPostgresql />} />
        <Skillinput title="React" icon={<FaReact />} />
        <Skillinput title="Redux toolkit" icon={<SiRedux />} />
        <Skillinput title="Boostrap" icon={<FaBootstrap />} />
        <Skillinput title="Tailwind" icon={<TbBrandTailwind />} />
        <Skillinput title="Git/ Github" icon={<FaGithub />} />
        <Skillinput title="NextJs" icon={<TbBrandNextjs />} />
        <Skillinput title="NestJs" icon={<SiNestjs />} />
      </div>
    </div>
  );
};
