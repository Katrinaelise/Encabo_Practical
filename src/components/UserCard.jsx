import { Link } from 'react-router-dom'
import Button from './Button.jsx'

export default function UserCard({ id, name, email, company, role, isFavorite, onToggleFavorite }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700 dark:bg-blue-900 dark:text-blue-200" aria-hidden="true">
          {name.split(' ').map((part) => part[0]).slice(0, 2).join('')}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="font-bold text-slate-900 dark:text-white">{name}</h2>
          <p className="mt-1 break-words text-sm text-slate-500 dark:text-slate-300">{email}</p>
        </div>
      </div>
      <p className="mb-2 text-sm text-slate-600 dark:text-slate-300"><span className="font-semibold">Role:</span> {role}</p>
      <p className="mb-5 text-sm text-slate-600 dark:text-slate-300"><span className="font-semibold">Company:</span> {company}</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-slate-700">
        <Link to={`/users/${id}`} className="text-sm font-semibold text-blue-700 underline-offset-4 hover:underline dark:text-blue-300">View Details</Link>
        <Button
          variant={isFavorite ? 'danger' : 'primary'}
          onClick={() => onToggleFavorite(id)}
          label={isFavorite ? '★ Favorited' : '☆ Favorite'}
          aria-pressed={isFavorite}
          aria-label={isFavorite ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
        />
      </div>
    </article>
  )
}
