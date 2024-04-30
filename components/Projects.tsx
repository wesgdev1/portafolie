import { GoProjectSymlink } from "react-icons/go";
import { Title } from "./Title";

import amazonClone from "../public/img/projects/amazonClone.webp";
import theGarage from "../public/img/projects/theGarage.png";
import prolinkApp from "../public/img/projects/prolinkApp.png";
import amvKids from "../public/img/projects/amvKids.png";
import petStay from "../public/img/projects/petStay.png";
import noa from "../public/img/projects/noa.png";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Proyectos " icon={<GoProjectSymlink />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        <Project
          role="Desarrollador FullStack"
          title="The Garage App"
          link={"https://the-garage-app.netlify.app/home"}
          image={theGarage.src}
          status={true}
          linkRepo="https://github.com/ManuelOrtegaR/the-garage"
        />
        <Project
          role="Desarrollador FullStack"
          title="Prolink App"
          link={"https://prolink-ncf0.onrender.com/home"}
          image={prolinkApp.src}
          status={true}
          linkRepo="https://github.com/wesgdev1/prolink-api"
        />
        <Project
          role="Desarrollador Backend"
          title="Noa"
          link={"https://noalone.vercel.app/"}
          image={noa.src}
          status={true}
          linkRepo={"https://github.com/No-Country/s14-09-ft-node-react"}
        />
        <Project
          role="Desarrollador FullStack"
          title="Amv Kids - En progreso.."
          link={"https://amvkids.com.co/"}
          image={amvKids.src}
          status={false}
          linkRepo="https://github.com/wesgdev1/amvKids"
        />
        <Project
          role="Desarrollador Backend"
          title="Pet Stay"
          link={"https://petstay.onrender.com/"}
          image={petStay.src}
          status={true}
          linkRepo={"https://github.com/No-Country/c16-16-t-node-react"}
        />
      </div>
    </div>
  );
};
