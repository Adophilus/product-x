import { classNames } from '@/utils/helpers'

export default function ButtonComponent({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={classNames(
        className,
        'inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500'
      )}
    >
      {children}
    </button>
  )
}
