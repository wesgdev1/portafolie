import { SocialLink } from "./SocialLink";
import { RiWhatsappFill } from "react-icons/ri";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import ProfileImg from "../public/img/profileImg.jpg";

export const Contact = () => {
  const people = [
    {
      id: 1,
      name: "Welinton Suarez",
      designation: "Software Engineer",
      image: ProfileImg.src,
    },
  ];
  return (
    <div className="wrapper">
      <div className=" max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold text-center  ">
          Creemos productos impresionantes juntos!
        </h2>
        <p className="text-lg tracking-wide font-medium text-center">
          Si tienes un proyecto en mente, una idea o simplemente quieres
          saludar, no dudes en contactarme.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=573208719438&text=Hola%2C%20vengo%20desde%20tu%20p%C3%A1gina%20web!!%2C%20c%C3%B3mo%20est%C3%A1s%3F"
          target="_blank"
        >
          <div className="flex justify-center items-center gap-10">
            <AnimatedTooltip items={people} />
            <button className="mt-3 w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl  text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300 flex  flex-col justify-center items-center">
              Hablemos
              <span>
                <RiWhatsappFill />
              </span>
            </button>
          </div>
        </a>
      </div>

      <div className="mt-10 flex justify-center items-center gap-5 flex-wrap">
        <SocialLink title="GitHub" link="https://github.com/wesgdev1" />
        <SocialLink
          title="LinKedin"
          link="https://www.linkedin.com/in/welinton-suarez/"
        />
        <SocialLink
          title="Currículum"
          link="https://drive.google.com/file/d/1e_b9-wE8mt6lbCj04cKp_dZ81grobsZQ/view"
        />
      </div>
    </div>
  );
};
