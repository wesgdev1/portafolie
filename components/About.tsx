import { SiInformatica } from "react-icons/si";
import { Title } from "./Title";

const About = () => {
  return (
    <div className="wrapper">
      <Title text="About me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-5 text-justify">
        <p>¡Hola, soy Welinton Suarez!</p>
        <p>
          Desarrollador Full-Stack apasionado por el desarrollo web y las
          telecomunicaciones. Especializado en JavaScript, Node, React, Express,
          SQL, y Git. Mi pasión por el desarrollo de software y las
          telecomunicaciones se fusionan en un conjunto de habilidades
          diversificadas que me permiten abordar desafíos con creatividad y
          enfoque. Más allá de mi dedicación al ámbito tecnológico, encontrarás
          en mí un entusiasta y amante del deporte. Considero que mantener un
          equilibrio entre el mundo digital y el bienestar físico es esencial
          para el crecimiento integral. Me gustaría conectar con colegas de la
          industria y embarcarnos juntos en proyectos estimulantes. Si buscas
          oportunidades en el campo del desarrollo web, la tecnología y las
          telecomunicaciones, o simplemente deseas intercambiar ideas, estaré
          encantado de estar en contacto.
        </p>
      </div>
    </div>
  );
};

export default About;
