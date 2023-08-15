import Navbar from './components/Navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@500&f[]=cabinet-grotesk@800&display=swap" rel="stylesheet"></link>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
