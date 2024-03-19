import Image from "next/image";

interface Props {
  title: string;
  link: string;
  image: string;
}
export const Project = ({ title, link, image }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-80 border-[1px] border-blue-600 overflow-hidden rounded-lg group relative hover:shadow-red-500 ">
        <Image
          className=" object-cover  group-hover:translate-y-[-70%] transition-transform duration-[4s]"
          src={image}
          alt="Project"
          width={355}
          height={355}
        />
        <p className="absolute bottom-0 w-full py-1 bg-blue-600 text-white text-center hidden group-hover:inline-block duration-300">
          {title}
        </p>
      </div>
    </a>
  );
};
