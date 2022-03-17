import Head from 'next/head'
import React from 'react'
import Footer from './Footer'

export default function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={description} />
        <link rel='shortcut icon' href='/images/favicon.ico' />
      </Head>
      <div>
        {children}
        <Footer />
      </div>
    </>
  )
}
