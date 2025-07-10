## GitHub User Search Interface

A responsive React.js application to search for GitHub users and view their top repositories by stars.

Live Demo: [https://githubuserssearchs.netlify.app](https://githubuserssearchs.netlify.app)

---

## Features

-  Real-time GitHub user search
-  Top repositories listed by stargazer count
-  Debounced search input (500ms delay)
-  Repository pagination (5 repos per page)
-  Error handling for invalid users
-  Fully responsive UI
-  Built with Vite + React
-  (Optional) Dark mode toggle *(currently not functional)*

---

## Tech Stack

- **React 19**
- **Tailwind CSS**
- **Vite**
- **GitHub REST API**

---

## Project Structure

my-github-app/
├── public/
│ └── _redirects # For Netlify routing (optional)
├── src/
│ ├── components/
│ │ ├── SearchBar.jsx
│ │ └── RepositoryList.jsx
│ ├── hooks/
│ │ └── useDebounce.js
│ ├── App.jsx
│ ├── index.jsx
│ └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json

yaml
Copy
Edit

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/my-github-app.git
cd my-github-app
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the development server
bash
Copy
Edit
npm run dev
The app should open on http://localhost:5173

🛠 Build for Production
bash
Copy
Edit
npm run build
Deploy the contents of the dist/ folder to any static hosting service (e.g. Netlify, Vercel, GitHub Pages).

 Deployment
This app is deployed on Netlify:

🔗 https://githubuserssearchs.netlify.app

 Notes
Uses the GitHub public REST API

Rate limited to 60 requests/hour (unauthenticated)

 License
This project is open-source and free to use under the MIT License.

 Acknowledgements
React

Tailwind CSS

GitHub API