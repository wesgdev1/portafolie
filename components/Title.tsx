import { SiInformatica } from "react-icons/si";

export const Title = () => {
  return (
    <div className="flex items-center gap-4 text-2xl group ">
      <h3 className=" font-semibold relative overflow-hidden">
        Acerca de mi
        <span className="w-full bg-blue-600 bottom-0 left-0 h-[2px] inline-block absolute -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </h3>
      <SiInformatica className=" text-blue-600" />
    </div>
  );
};
