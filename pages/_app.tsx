import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter,Quicksand } from 'next/font/google'
import { GoogleOAuthProvider } from '@react-oauth/google'
import  { Toaster } from 'react-hot-toast';




const inter = Inter({ subsets: ['latin'] })
const Quicks = Quicksand({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  return <div className={inter.className}>
    <GoogleOAuthProvider clientId={"954684237409-89879ecf96194mqst64iccvb0thjofdd.apps.googleusercontent.com"} >
    <Component {...pageProps} />
    <Toaster/>



    </GoogleOAuthProvider>

  </div>
}
