export default function About() {
  return (
    <section className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-300">About</p>
      <h1 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">About the Team Directory</h1>
      <div className="mt-5 space-y-4 leading-7 text-slate-600 dark:text-slate-300">
        <p>
          This team directory is designed to help visitors quickly browse the people behind the project,
          learn their roles, and access their contact information in one organized place.
        </p>
        <p>
          Built with React, Vite, and Tailwind CSS, the app showcases a clean user experience with
          searchable profiles, favorites, loading states, route-based navigation, and a light/dark theme.
        </p>
        <p>
          All member information is stored locally in <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-100">src/data/users.js</code>,
          making the directory easy to update and maintain without relying on an external API.
        </p>
      </div>
    </section>
  )
}
