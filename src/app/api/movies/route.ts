import { NextResponse } from "next/server";
interface ApiMovie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  adult: boolean;
}

export async function GET() {
  const API_KEY = process.env.TMDB_API_KEY;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`
  );

  if (!response.ok) {
    return NextResponse.json(
      { message: "Erro ao buscar filmes" },
      { status: 500 }
    );
  }

  const data = await response.json();
  const filteredResults = data.results.filter(
    (movie: ApiMovie) => !movie.adult
  );
  return NextResponse.json({ ...data, results: filteredResults });
}
