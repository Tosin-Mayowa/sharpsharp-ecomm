import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {NavBar} from '../Component/NavBar/NavBar'
import Footer from '../Component/Footer/Footer'
function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <>
    <NavBar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
  
}

export default MyApp
