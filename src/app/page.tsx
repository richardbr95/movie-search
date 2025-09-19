"use client";

import Title from "@/components/Title";
import MovieCard from "@/components/MovieCard";
import { useState, useEffect } from "react";

interface Movie {
  id: string;
  title: string;
  poster: string;
  year: string;
}

interface ApiMovie {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(`/api/movies?page=${page}`);
      const data = await res.json();
      console.log(data);

      const formatted = data.results.map((movie: ApiMovie) => ({
        id: movie.id,
        title: movie.title,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        year: movie.release_date.split("-")[0],
      }));
      setMovies(formatted);
    }
    fetchMovies();
  }, [page]);

  return (
    <section>
      <Title title="Filmes" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            year={movie.year}
            id={movie.id}
          />
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 font-semibold"
        >
          Anterior
        </button>
        <span className=" text-white font-semibold py-2">Página {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded font-semibold"
        >
          Próximo
        </button>
      </div>
    </section>
  );
}
