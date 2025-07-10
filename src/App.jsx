import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RepositoryList from "./components/RepositoryList";

function App() {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const reposPerPage = 5;
  const totalPages = Math.ceil(repos.length / reposPerPage);
  const currentRepos = repos.slice(
    (currentPage - 1) * reposPerPage,
    currentPage * reposPerPage
  );

  const handleSearch = async (username) => {
    setUserData(null);
    setRepos([]);
    setError("");
    setLoading(true);
    setCurrentPage(1);

    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) throw new Error("User not found");
      const user = await userRes.json();

      const reposRes = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`
      );
      if (!reposRes.ok) throw new Error("Repositories not found");
      const allRepos = await reposRes.json();

      const sorted = allRepos.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );

      setUserData(user);
      setRepos(sorted);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-100 text-gray-800 transition-colors duration-300">
      <h1 className="text-2xl font-bold text-center mb-4">
        GitHub User Search
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {userData && (
        <>
          <div className="mt-8 max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h2 className="text-xl text-center font-bold mt-4">
              {userData.name || userData.login}
            </h2>
            <p className="text-center text-gray-600">{userData.bio}</p>
            <p className="text-center mt-2">
              {userData.location || "Unknown"} | {userData.followers} followers
            </p>
          </div>

          <RepositoryList repos={currentRepos} />

          {/* Pagination */}
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              Prev
            </button>
            <span className="px-3 py-1">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
