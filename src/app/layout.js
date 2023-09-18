import HeaderNavBar from '@/components/HeaderNavBar';
import './globals.css';
import Footer from './../components/Footer';


export const metadata = {
  title: 'Home',
  description: 'We are an Web App Agency Company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderNavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
