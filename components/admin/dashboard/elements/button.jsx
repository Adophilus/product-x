import { classNames } from '@/utils/helpers'

export default function ButtonComponent({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={classNames(
        className,
        'inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
      )}
    >
      {children}
    </button>
  )
}
