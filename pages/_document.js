import { Html, Main, Head, NextScript } from 'next/document'

export default function DocumentComponent() {
  return (
    <Html className="h-full bg-gray-100">
      <Head />
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
