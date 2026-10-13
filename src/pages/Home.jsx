import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 py-14 text-white shadow-lg sm:px-12 sm:py-20">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-100">People make the team</p>
      <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">Meet your team, all in one place.</h1>
      <p className="mt-5 max-w-xl text-base leading-7 text-blue-50 sm:text-lg">Browse team members, discover their roles and companies, and save your favorites for quick access.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/users" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">Explore Users</Link>
        <Link to="/about" className="inline-flex items-center rounded-lg border border-white/50 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">About this app</Link>
      </div>
    </section>
  )
}
