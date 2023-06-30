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
      <body>{children}</body>
    </html>
  )
}
