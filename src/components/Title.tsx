interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <h1 className="text-2xl font-bold flex justify-center">{title}</h1>;
}
