import { GoProjectSymlink } from "react-icons/go";
import { Title } from "./Title";

import amazonClone from "../public/img/projects/amazonClone.webp";
import theGarage from "../public/img/projects/theGarage.png";
import prolinkApp from "../public/img/projects/prolinkApp.png";
import amvKids from "../public/img/projects/amvKids.png";
import petStay from "../public/img/projects/petStay.png";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Proyectos " icon={<GoProjectSymlink />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        <Project
          title="The Garage App"
          link={"https://the-garage-app.netlify.app/home"}
          image={theGarage.src}
          status={true}
        />
        <Project
          title="Prolink App"
          link={"https://prolink-ncf0.onrender.com/home"}
          image={prolinkApp.src}
          status={true}
        />
        <Project
          title="Amv Kids - En progreso.."
          link={"https://amvkids.com.co/"}
          image={amvKids.src}
          status={false}
        />
        <Project
          title="Pet Stay"
          link={"https://petstay.onrender.com/"}
          image={petStay.src}
          status={true}
        />
      </div>
    </div>
  );
};
