import { Skillinput } from "./Skillinput";
import { Title } from "./Title";
import { GiSkills } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io";
import { RiJavascriptLine } from "react-icons/ri";

export const Skill = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-5 flex-wrap justify-center">
        <Skillinput title="Node" icon={<RiJavascriptLine />} />
        <Skillinput title="Javascript" icon={<RiJavascriptLine />} />
        <Skillinput title="Express" icon={<RiJavascriptLine />} />
        <Skillinput title="Prisma" icon={<RiJavascriptLine />} />
        <Skillinput title="Postgresql" icon={<RiJavascriptLine />} />
        <Skillinput title="React" icon={<RiJavascriptLine />} />
        <Skillinput title="Redux toolkit" icon={<RiJavascriptLine />} />
        <Skillinput title="Boostrap" icon={<RiJavascriptLine />} />
        <Skillinput title="Tailwind" icon={<RiJavascriptLine />} />
        <Skillinput title="Git/ Github" icon={<RiJavascriptLine />} />
      </div>
    </div>
  );
};
