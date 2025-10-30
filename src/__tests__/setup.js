import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import 'whatwg-fetch';
import {Blob} from 'node:buffer';

const mockData = {
  '/directors': [
    {
      id: 1,
      name: "Scott Derrickson",
      movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"]
    },
    {
      id: 2,
      name: "Mike Mitchell",
      movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"]
    },
    {
      id: 3,
      name: "Edward Zwick",
      movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"]
    }
  ],
  '/actors': [
    {
      id: 1,
      name: "Benedict Cumberbatch",
      movies: ["Doctor Strange", "The Imitation Game", "Black Mass"]
    },
    {
      id: 2,
      name: "Justin Timberlake",
      movies: ["Trolls", "Friends with Benefits", "The Social Network"]
    },
    {
      id: 3,
      name: "Anna Kendrick",
      movies: ["Pitch Perfect", "Into The Wood"]
    },
    {
      id: 4,
      name: "Tom Cruise",
      movies: [
        "Jack Reacher: Never Go Back",
        "Mission Impossible 4",
        "War of the Worlds"
      ]
    }
  ],
  '/movies': [
    {
      id: 1,
      title: "Doctor Strange",
      time: 115,
      genres: ["Action", "Adventure", "Fantasy"]
    },
    {
      id: 2,
      title: "Trolls",
      time: 92,
      genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"]
    },
    {
      id: 3,
      title: "Jack Reacher: Never Go Back",
      time: 118,
      genres: ["Action", "Adventure", "Crime", "Mystery", "Thriller"]
    }
  ],
  '/movies/1': {
    id: 1,
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"]
  }
};

global.fetch = vi.fn((url) => {
  const path = url.replace('http://localhost:4000', '');
  if (mockData[path]) {
    return Promise.resolve({
      json: () => Promise.resolve(mockData[path])
    });
  }
  return Promise.reject(new TypeError('Network request failed'));
});

afterEach(() => {
    cleanup();
})
