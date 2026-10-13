export default function ErrorMessage({ children = 'Something went wrong.' }) {
  return <p role="status" className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-amber-900 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100">{children}</p>
}
