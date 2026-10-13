import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Users from './pages/Users.jsx'
import UserDetails from './pages/UserDetails.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

const STORAGE_KEYS = {
  favorites: 'team-directory-favorites',
  theme: 'team-directory-theme',
}

function AppContent() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEYS.favorites)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedTheme = window.localStorage.getItem(STORAGE_KEYS.theme)
      if (savedTheme) return savedTheme === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch {
      return false
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    window.localStorage.setItem(STORAGE_KEYS.theme, darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (id) => {
    setFavorites((current) => current.includes(id) ? current.filter((favoriteId) => favoriteId !== id) : [...current, id])
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Navbar favoriteCount={favorites.length} darkMode={darkMode} onToggleDarkMode={() => setDarkMode((current) => !current)} />
      <main className="mx-auto min-h-[calc(100vh-150px)] max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200 py-5 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">Team Directory App · React + Vite + Tailwind CSS</footer>
    </div>
  )
}

export default function App() {
  return <BrowserRouter><AppContent /></BrowserRouter>
}
