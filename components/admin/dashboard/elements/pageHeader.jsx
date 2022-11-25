export default function PageHeaderComponent({ title, children, icon }) {
  const Icon = icon
  return (
    <div className="bg-white shadow">
      <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
          <div className="flex-1 min-w-0">
            <div className="flex justify-between">
              <div>
                <div className="flex items-center">
                  <h1 className="flex gap-x-2 items-center ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                    {icon != null ? <Icon className="-mr-1 h-7 w-7" /> : null}
                    {title}
                  </h1>
                </div>
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
