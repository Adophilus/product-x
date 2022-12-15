import { useContext, useRef, useState } from 'react'
import { Context as AppContext } from '@/contexts/app'
import { classNames } from '@/utils/helpers'
import { StatusCodes } from 'http-status-codes'
import { CheckCircleIcon } from '@heroicons/react/solid'

export const route = '/provider/login'

const State = {
  isSubmitting: 0,
  hasSubmitted: 1
}

export default function LoginView() {
  const { user } = useContext(AppContext)
  const [state, setState] = useState(null)

  const form = {
    email: useRef(),
    get values() {
      return {
        email: this.email.current?.value
      }
    },
    empty() {
      this.email.current ? (this.email.current.value = '') : null
    }
  }

  const onSubmit = async (e) => {
    setState(State.isSubmitting)
    e.preventDefault()
    const loginUrl = '/api/auth/login'

    const res = await fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify(form.values)
    })
    let json

    switch (res.status) {
      case StatusCodes.OK:
        console.log('Please check your email')
        break
      default:
        json = await res.json()
        console.log(json)
    }
    setState(State.hasSubmitted)
  }

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md">
        {state === State.hasSubmitted ? (
          <p>Check your email for the login link</p>
        ) : (
          <>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login
            </h2>
            <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form
                onSubmit={onSubmit}
                className="space-y-6"
                action="#"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      ref={form.email}
                      id="email"
                      type="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    disabled={state === State.isSubmitting}
                    type="submit"
                    className={classNames(
                      state === State.isSubmitting
                        ? 'cursor-not-allowed bg-gray-300'
                        : 'cursor-pointer bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
                      'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white'
                    )}
                  >
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
