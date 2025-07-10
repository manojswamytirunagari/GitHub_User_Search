function RepositoryList({ repos }) {
  return (
    <div className="mt-6 max-w-xl mx-auto">
      <h3 className="text-xl font-semibold mb-2 text-center">Repositories</h3>
      <ul className="space-y-3">
        {repos.map((repo) => (
          <li key={repo.id} className="p-4 border rounded shadow-sm bg-white">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-sm text-gray-600">{repo.description}</p>
            <span className="text-xs text-gray-500">
              ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoryList;
