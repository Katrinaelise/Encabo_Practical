export default function Loader() {
  return (
    <div className="flex items-center justify-center gap-3 py-14 text-slate-600 dark:text-slate-300" role="status" aria-live="polite">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
      <span>Loading...</span>
    </div>
  )
}
