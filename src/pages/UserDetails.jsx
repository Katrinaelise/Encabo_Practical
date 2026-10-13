import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { users } from '../data/users.js'
import Loader from '../components/Loader.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'

export default function UserDetails() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const foundUser = users.find((person) => person.id === Number(id))
    setUser(foundUser ?? null)
    setLoading(false)
    document.title = foundUser ? foundUser.name : 'User not found'
  }, [id])

  if (loading) return <Loader />
  if (!user) return <div className="space-y-5"><ErrorMessage>User not found.</ErrorMessage><Link className="font-semibold text-blue-700 underline dark:text-blue-300" to="/users">← Back to Users</Link></div>

  return (
    <section className="mx-auto max-w-2xl">
      <Link to="/users" className="inline-flex items-center font-semibold text-blue-700 hover:underline dark:text-blue-300">← Back to Users</Link>
      <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-xl font-extrabold text-blue-700 dark:bg-blue-900 dark:text-blue-200">{user.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</div>
        <h1 className="mt-5 text-3xl font-extrabold text-slate-900 dark:text-white">{user.name}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{user.role}</p>
        <dl className="mt-7 divide-y divide-slate-200 dark:divide-slate-700">
          <div className="grid gap-1 py-4 sm:grid-cols-[140px_1fr]"><dt className="font-semibold text-slate-500 dark:text-slate-400">Email</dt><dd className="break-words text-slate-900 dark:text-white">{user.email}</dd></div>
          <div className="grid gap-1 py-4 sm:grid-cols-[140px_1fr]"><dt className="font-semibold text-slate-500 dark:text-slate-400">Company</dt><dd className="text-slate-900 dark:text-white">{user.company}</dd></div>
          <div className="grid gap-1 py-4 sm:grid-cols-[140px_1fr]"><dt className="font-semibold text-slate-500 dark:text-slate-400">Role</dt><dd className="text-slate-900 dark:text-white">{user.role}</dd></div>
        </dl>
      </article>
    </section>
  )
}
