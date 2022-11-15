export default function ButtonComponent({ children }) {
  return (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-cyan-100 bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
    >
      {children}
    </button>
  )
}
