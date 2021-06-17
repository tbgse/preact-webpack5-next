import { useEffect } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    alert('hello world!');
  })
  
  return <Component {...pageProps} />
}

export default MyApp
