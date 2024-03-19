import { GoProjectSymlink } from "react-icons/go";
import { Title } from "./Title";

import amazonClone from "../public/img/projects/amazonClone.webp";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Proyectos " icon={<GoProjectSymlink />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        <Project
          title="prueba"
          link={"https://the-garage-app.netlify.app/home"}
          image={amazonClone.src}
        />
        <Project
          title="prueba"
          link={"https://the-garage-app.netlify.app/home"}
          image={amazonClone.src}
        />
        <Project
          title="prueba"
          link={"https://www.google.com"}
          image={amazonClone.src}
        />
        <Project
          title="prueba"
          link={"https://the-garage-app.netlify.app/home"}
          image={amazonClone.src}
        />
        <Project
          title="prueba"
          link={"https://the-garage-app.netlify.app/home"}
          image={amazonClone.src}
        />
      </div>
    </div>
  );
};
