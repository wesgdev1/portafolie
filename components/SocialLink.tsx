import { FiArrowUpRight } from "react-icons/fi";

interface Props {
  title: string;
  link: string;
}

export const SocialLink = ({ title, link }: Props) => {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        className="flex item-center gap-2 text-xl text-gray-400 font-semibold justify-center group"
      >
        <p className="group-hover:text-white">{title}</p>
        <FiArrowUpRight
          className="translate-x-0 translate-y-0
          group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
        />
      </a>
    </div>
  );
};
