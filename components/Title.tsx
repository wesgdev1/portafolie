import { ReactNode } from "react";
import { SiInformatica } from "react-icons/si";

interface Props {
  text: string;
  icon: ReactNode;
}
export const Title = ({ text, icon }: Props) => {
  return (
    <div className="flex items-center gap-4 text-2xl group pb-8 ">
      <h3 className=" font-semibold relative overflow-hidden">
        {text}
        <span className="w-full bg-blue-600 bottom-0 left-0 h-[2px] inline-block absolute -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </h3>
      <span className="text-blue-600">{icon}</span>
    </div>
  );
};
