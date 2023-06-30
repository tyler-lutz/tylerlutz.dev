import './globals.css'

export const metadata = {
  metadataBase: new URL('https://tylerlutz.dev'),
  title: {
    default: 'Tyler Lutz',
    template: '%s | Tyler Lutz',
  },
  description: 'Developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="mx-auto min-h-screen max-w-2xl bg-slate-900 px-6 py-12 text-slate-400 lg:max-w-5xl">
        {children}
      </body>
    </html>
  )
}
