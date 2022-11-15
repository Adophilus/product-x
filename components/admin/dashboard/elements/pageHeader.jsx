export default function PageHeaderComponent({ title, children }) {
  return (
    <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
      <>
        {title}
        {children}
      </>
    </h1>
  )
}
