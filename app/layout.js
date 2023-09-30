import './global.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import { BreakpointProvider } from './context/AppProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Golf in Cabo',
  description: 'Book the most exclusive golf courses in Cabo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BreakpointProvider>
          <Header />
          {children}
        </BreakpointProvider>
        </body>
    </html>
  )
}
