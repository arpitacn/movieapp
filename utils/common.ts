export const tabs = [
  { id: "all", label: "All" },
  { id: "movie", label: "Movies" },
  { id: "series", label: "TV Shows" },
];
export const omdb_api_key = process.env.NEXT_PUBLIC_OMDB_API_KEY;

// utils/debounce.ts
export function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

