import Image from "next/image";

interface MovieCardProps {
  title: string;
  poster: string;
  year: string;
}

export default function MovieCard({ title, poster, year }: MovieCardProps) {
  return (
    <div className="bg-gray-800 w-[16rem] m-auto text-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
      <div className="relative w-full aspect-[3/3]">
        <Image
          src={poster}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        ></Image>
      </div>
      <div className="p-3">
        <h3 className="text-lg font-bold truncate">{title}</h3>
        <p className="text-gray-400">{year}</p>
      </div>
    </div>
  );
}
