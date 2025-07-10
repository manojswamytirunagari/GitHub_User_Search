import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 500);

  useEffect(() => {
    if (debouncedInput) onSearch(debouncedInput);
  }, [debouncedInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-2 mt-4">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="px-4 py-2 border rounded w-64 text-black"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
