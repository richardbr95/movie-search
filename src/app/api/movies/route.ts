import { NextResponse } from "next/server";
interface ApiMovie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  adult: boolean;
  genre_ids: number[];
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const API_KEY = process.env.TMDB_API_KEY;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`
  );

  if (!response.ok) {
    return NextResponse.json(
      { message: "Erro ao buscar filmes" },
      { status: 500 }
    );
  }

  const data = await response.json();
  // IDs de gêneros "seguros" (Ação, Aventura, Animação, Comédia, Família)
  const allowedGenders = [28, 12, 16, 35, 10751];
  const filteredResults = data.results.filter(
    (movie: ApiMovie) =>
      !movie.adult && movie.genre_ids.some((id) => allowedGenders.includes(id))
  );
  return NextResponse.json({ ...data, results: filteredResults });
}
