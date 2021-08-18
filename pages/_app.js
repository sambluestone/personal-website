import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'
import React from 'react'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
