import Image from "next/image";

interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

async function getMovie(id: string): Promise<Movie> {
  const API_KEY = process.env.TMDB_API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`
  );
  if (!res.ok) {
    throw new Error("Erro ao buscar filme");
  }
  return res.json();
}

export default async function MovieDetailPage({
  params,
}: {
  params: Record<string, string>;
}) {
  const { id } = params;
  const movie = await getMovie(id);
  const BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="max-w-4xl mx-auto p-6 text-white ">
      <div className="flex flex-col md:flex-col gap-6 justify-center items-center">
        <div className="w-full md:w-1/3">
          <Image
            src={`${BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            width={400}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-amber-50 text-3xl text-center font-semibold">
            {movie.title}
          </h1>
          <p className="text-amber-100 mt-1.5 text-2xl text-center font-semibold">
            {movie.release_date}
          </p>
          <p className="mt-4 text-justify text-2xl font-medium">
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
