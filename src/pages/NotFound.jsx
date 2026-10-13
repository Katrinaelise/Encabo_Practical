import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-12 text-center">
      <p className="text-6xl font-black text-blue-600 dark:text-blue-300">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">Page not found</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Sorry, we couldn’t find the page you’re looking for.</p>
      <Link to="/" className="mt-6 inline-block font-semibold text-blue-700 underline dark:text-blue-300">Return home</Link>
    </section>
  )
}
