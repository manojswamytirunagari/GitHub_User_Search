# GitHub User Search 

A responsive React application to search GitHub users and explore their top repositories.

Built with modern tools like React, Tailwind CSS, and the GitHub REST API, this app showcases a simple and efficient developer experience.

---

##  Features

-  **Search GitHub Users** by username
-  **Top Repositories** displayed by stars
-  **Dark Mode Toggle**
-  **Loading Indicators** for async requests
-  **Client-side Pagination**
-  **Error Handling** (user not found, API issues)
-  **Responsive Layout** (mobile-friendly)

---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/github-user-search.git
cd github-user-search
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the App
bash
Copy
Edit
npm run dev
The app will be available at:
-> http://localhost:5173

## Built With
React

Tailwind CSS

Vite

GitHub REST API

## Project Structure
arduino
Copy
Edit
my-github-app/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   └── RepositoryList.jsx
│   ├── hooks/
│   │   └── useDebounce.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── postcss.config.js
├── tailwind.config.js
├── package.json
└── README.md
## Customization
Want to extend or customize the project?

Add user contribution stats

Display pinned repositories

Show languages used in repos

Improve pagination with infinite scroll

## Author
Built by [Manoj Swamy Tirunagari] as a learning project.