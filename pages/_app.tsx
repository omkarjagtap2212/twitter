import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Quicksand } from 'next/font/google'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Toaster } from 'react-hot-toast';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const inter = Inter({ subsets: ['latin'] })
const Quicks = Quicksand({ subsets: ['latin'] })

const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className}>
    <QueryClientProvider client={queryClient}>
    <GoogleOAuthProvider clientId="411322396678-6j0ur9qjj3r9vejr9pj09dn250pc0gfm.apps.googleusercontent.com" >
      <Component {...pageProps} />
      <Toaster/>
      <ReactQueryDevtools/>
    </GoogleOAuthProvider>
    </QueryClientProvider>

  </div>
}
