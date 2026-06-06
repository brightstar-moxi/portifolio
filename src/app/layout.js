import { Inter } from 'next/font/google'
import './globals.css'
import CommonLayout from '../components/client-view/common-layout'
import ConvexClientProvider from "@/providers/convex-provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portilio',
  description: 'This showcase that i am full-stack developer, do go by checking my portifolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <CommonLayout>
            {children}
          </CommonLayout>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
