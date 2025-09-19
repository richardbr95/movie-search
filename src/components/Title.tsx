interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <h1 className="text-5xl font-bold flex justify-center mt-10 mb-10">
      {title}
    </h1>
  );
}
