import { useEffect, useMemo, useState } from 'react'
import { users as localUsers } from '../data/users.js'
import UserCard from '../components/UserCard.jsx'
import Loader from '../components/Loader.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'

export default function Users({ favorites, onToggleFavorite }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [favoritesOnly, setFavoritesOnly] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(localUsers)
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const displayedUsers = useMemo(() => {
    const query = search.trim().toLowerCase()

    return users.filter((user) => {
      const matchesQuery = query === ''
        || user.name.toLowerCase().includes(query)
        || user.role.toLowerCase().includes(query)
        || user.company.toLowerCase().includes(query)

      const matchesFavorites = !favoritesOnly || favorites.includes(user.id)

      return matchesQuery && matchesFavorites
    })
  }, [users, search, favoritesOnly, favorites])

  useEffect(() => {
    document.title = `Users (${displayedUsers.length})`
  }, [displayedUsers.length])

  const clearFilters = () => {
    setSearch('')
    setFavoritesOnly(false)
  }

  return (
    <section>
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-300">Directory</p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Team members</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Search people and save your favorites.</p>
        </div>
        <div className="w-full sm:max-w-sm">
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200">Search by name, role, or company</span>
            <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try “Frontend” or “Northstar Labs”" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900" />
          </label>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800">
        <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
          <input type="checkbox" checked={favoritesOnly} onChange={(event) => setFavoritesOnly(event.target.checked)} className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
          Show favorites only
        </label>
        {(search || favoritesOnly) && (
          <button type="button" onClick={clearFilters} className="text-sm font-semibold text-blue-700 underline-offset-4 hover:underline dark:text-blue-300">
            Clear filters
          </button>
        )}
      </div>

      {loading ? <Loader /> : displayedUsers.length === 0 ? (
        <div className="space-y-4">
          <ErrorMessage>No people match your current search or favorites filter.</ErrorMessage>
          <button type="button" onClick={clearFilters} className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Clear search and view all users
          </button>
        </div>
      ) : (
        <>
          <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">Showing {displayedUsers.length} of {users.length} users</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {displayedUsers.map((user) => <UserCard key={user.id} {...user} isFavorite={favorites.includes(user.id)} onToggleFavorite={onToggleFavorite} />)}
          </div>
        </>
      )}
    </section>
  )
}
