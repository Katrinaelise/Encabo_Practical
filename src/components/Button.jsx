export default function Button({ label, onClick, variant = 'primary', children, type = 'button', className = '', ...props }) {
  const styles = variant === 'danger'
    ? 'bg-rose-600 hover:bg-rose-700 focus:ring-rose-300'
    : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'

  return (
    <button type={type} onClick={onClick} className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-4 ${styles} ${className}`.trim()} {...props}>
      {label}{children}
    </button>
  )
}
