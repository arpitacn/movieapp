import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import MovieList from "../components/MovieList";

// Mock child components
jest.mock("../components/MovieCard", () => {
  return function DummyMovieCard() {
    return <div>MovieCard</div>;
  };
});

jest.mock("../components/Tabs", () => {
  return function DummyTabNav() {
    return <div>TabNav</div>;
  };
});

describe("MovieList", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("fetches movies and displays them", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({
      Search: [
        {
          Title: "Everything Everywhere All at Once",
          Year: "2022",
          imdbID: "tt6710474",
          Type: "movie",
          Poster: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg"
        },
        {
          Title: "All Quiet on the Western Front",
          Year: "2022",
          imdbID: "tt1016150",
          Type: "movie",
          Poster: "https://m.media-amazon.com/images/M/MV5BMzM4ZDJhYjYtZGY5Ny00NTk0LWI4ZTYtNjczZDFiMGI2ZjEzXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg"
        },
      ]
    }));

    render(<MovieList type="all" searchName="all" />);

    await waitFor(() => {
      expect(screen.getByText("TabNav")).toBeInTheDocument();
      expect(screen.getAllByText("MovieCard").length).toBe(2); // Expecting two MovieCards
    });
  });

  it("displays no results found when no movies are returned", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ Search: [] }));

    render(<MovieList type="all" searchName="none" />);

    await waitFor(() => {
      expect(screen.getByText("No results found")).toBeInTheDocument();
    });
  });
});
