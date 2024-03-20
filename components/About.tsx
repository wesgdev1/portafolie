import { SiInformatica } from "react-icons/si";
import { Title } from "./Title";

const About = () => {
  return (
    <div className="wrapper">
      <Title text="Acerca de mi" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-5 text-justify">
        <p>
          Soy un apasionado Desarrollador Full-Stack especializado en
          JavaScript, Node, React, y SQL. Mi fascinación por el desarrollo web
          se une a mi interés en las telecomunicaciones, creando un combo de
          habilidades que abordan desafíos con creatividad. Amante del deporte,
          creo en el equilibrio entre lo digital y el bienestar físico.
          ¡Conéctemos y sumerjámonos en proyectos emocionantes juntos!
        </p>
      </div>
    </div>
  );
};

export default About;
