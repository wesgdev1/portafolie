interface Props {
  title: string;
  icon: React.ReactNode;
}
export const Skillinput = ({ title, icon }: Props) => {
  return (
    <p className="flex  items-center gap-2  border border-blue-500 py-2 px-6 rounded text-lg hover:bg-slate-500 hover:rotate-12 tracking-wide duration-300">
      {icon}
      <span>{title}</span>
    </p>
  );
};
