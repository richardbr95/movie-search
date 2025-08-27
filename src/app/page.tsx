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

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch("/api/movies");
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
  }, []);

  return (
    <section>
      <Title title="Filmes" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            year={movie.year}
          />
        ))}
      </div>
    </section>
  );
}
