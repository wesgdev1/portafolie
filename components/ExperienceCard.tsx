import { SiReactivex } from "react-icons/si";

interface Props {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
}

export const ExperienceCard = ({ title, subTitle, icon }: Props) => {
  return (
    <div className="flex items-center gap-6">
      <span className="w-12 h-12 rounded-full bg-black border-[1px] border-blue-700 flex justify-center items-center">
        <span className="text-2xl">{icon}</span>
      </span>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-base text-gray-400 tracking-wide">{subTitle}</p>
      </div>
    </div>
  );
};
