import { GoProjectSymlink } from "react-icons/go";
import { Title } from "./Title";

export const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Proyectos" icon={<GoProjectSymlink />} />
    </div>
  );
};
