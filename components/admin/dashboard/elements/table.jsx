import { classNames } from '@/utils/helpers'
/*
interface header {
  name: string
  alignment: 'left' | 'right'
  hidden: boolean
}
*/

export default function TableComponent({ headers, records }) {
  return (
    <div className="hidden sm:block">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mt-2">
          <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  {headers.map((header) => (
                    <th
                      key={header.name}
                      className={classNames(
                        header.alignment === 'left'
                          ? 'text-left'
                          : header.alignment === 'right'
                          ? 'text-right'
                          : header.alignment === 'center'
                          ? 'text-center'
                          : 'text-left',
                        'px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider'
                      )}
                    >
                      {header.name}
                    </th>
                  ))}
                </tr>
              </thead>
              {records.length > 0 && (
                <tbody className="bg-white divide-y divide-gray-200">
                  {records.map((record, index) => (
                    <tr key={index} className="bg-white">
                      {record.map((field, index) => (
                        <td
                          key={index}
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                        >
                          {field}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
            {records.length === 0 && (
              <p className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">
                No records found!
              </p>
            )}
            {/* Pagination */}
            <nav
              className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
              aria-label="Pagination"
            >
              <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{' '}
                  <span className="font-medium">10</span> of{' '}
                  <span className="font-medium">{records.length}</span> results
                </p>
              </div>
              <div className="flex-1 flex justify-between gap-x-3 sm:justify-end">
                <button
                  disabled={records.length === 0}
                  className={classNames(
                    records.length === 0
                      ? 'text-gray-400 bg-gray-50'
                      : 'text-gray-700 bg-white hover:bg-gray-50',
                    'relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md'
                  )}
                >
                  Previous
                </button>
                <button
                  disabled={records.length === 0}
                  className={classNames(
                    records.length === 0
                      ? 'text-gray-400 bg-gray-50'
                      : 'text-gray-700 bg-white hover:bg-gray-50',
                    'relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md'
                  )}
                >
                  Next
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
