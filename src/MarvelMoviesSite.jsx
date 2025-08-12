import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Calendar, Film } from 'lucide-react'
import placeholder from './assets/placeholder.jpg'

const movies = [
  {
    title: 'Iron Man',
    year: 2008,
    phase: 'Phase 1',
    poster: placeholder,
    trailer: 'https://www.youtube.com/embed/8ugaeA-nMTc',
    description: 'Tony Stark builds his first suit of armor and becomes Iron Man.'
  },
  {
    title: 'Avengers: Endgame',
    year: 2019,
    phase: 'Phase 3',
    poster: placeholder,
    trailer: 'https://www.youtube.com/embed/TcMBFSGVi1c',
    description: 'The Avengers assemble once more to undo Thanos’s snap.'
  }
]

export default function MarvelMoviesSite() {
  const [selectedMovie, setSelectedMovie] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-black to-black">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-red-500">Marvel Movies Timeline</h1>
        <p className="text-gray-300 mt-2">Explore the Marvel Cinematic Universe in order</p>
      </header>

      <main className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        {movies.map((movie, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedMovie(movie)}
          >
            <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{movie.title}</h2>
              <div className="flex items-center text-sm text-gray-400 mt-1">
                <Calendar size={14} className="mr-1" /> {movie.year}
              </div>
              <p className="text-gray-300 text-sm mt-2">{movie.description}</p>
            </div>
          </motion.div>
        ))}
      </main>

      {selectedMovie && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-xl overflow-hidden max-w-2xl w-full">
            <div className="relative">
              <iframe
                className="w-full aspect-video"
                src={selectedMovie.trailer}
                title={selectedMovie.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                className="absolute top-2 right-2 bg-red-600 px-2 py-1 rounded"
                onClick={() => setSelectedMovie(null)}
              >
                Close
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold">{selectedMovie.title}</h2>
              <p className="text-gray-300 mt-2">{selectedMovie.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
