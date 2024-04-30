import Image from "next/image";

interface Props {
  role: string;
  title: string;
  link: string;
  image: string;
  status: boolean;
  linkRepo?: string;
}
export const Project = ({
  linkRepo,
  role,
  title,
  link,
  image,
  status,
}: Props) => {
  return (
    <div className="flex flex-col">
      <div className="mx-2 my-4  px-3 border-l-4 border-blue-600   ">
        <h3>Rol: {role}</h3>
        {linkRepo && (
          <a
            href={linkRepo}
            target="_blank"
            className="font-bold text-blue-400 hover:text-gray-600"
          >
            <p>Ver repositorio</p>
          </a>
        )}
      </div>
      <a href={link} target="_blank">
        <div className="w-full h-80 border-[1px] border-blue-600 overflow-hidden rounded-lg group relative hover:shadow-red-500 ">
          <Image
            className=" object-cover  group-hover:translate-y-[-70%] transition-transform duration-[4s]"
            src={image}
            alt="Project"
            width={355}
            height={355}
          />
          {status ? (
            <p className="absolute bottom-0 w-full py-1  bg-blue-600 text-white text-center hidden group-hover:inline-block duration-300">
              {title}
            </p>
          ) : (
            <p className="absolute bottom-0 w-full py-1  bg-red-600 text-white text-center hidden group-hover:inline-block duration-300">
              {title}
            </p>
          )}
        </div>
      </a>
    </div>
  );
};
