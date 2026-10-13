import { NavLink } from 'react-router-dom'
import Button from './Button.jsx'

export default function Navbar({ favoriteCount, darkMode, onToggleDarkMode }) {
  const linkClass = ({ isActive }) => `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive ? 'bg-blue-100 text-blue-800 underline decoration-2 underline-offset-4 dark:bg-blue-900 dark:text-blue-100' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-700'}`
  return (
    <header className="border-b border-slate-200 bg-white/95 dark:border-slate-700 dark:bg-slate-900/95">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6" aria-label="Main navigation">
        <NavLink to="/" className="text-lg font-extrabold tracking-tight text-blue-700 dark:text-blue-300">Team Directory</NavLink>
        <div className="flex flex-wrap items-center gap-1">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/users" className={linkClass}>Users</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Favorites: {favoriteCount}</span>
          <Button label={darkMode ? '☀ Light Mode' : '☾ Dark Mode'} onClick={onToggleDarkMode} />
        </div>
      </nav>
    </header>
  )
}
