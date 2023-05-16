import '@styles/globals.css'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

export const metadata = {
    title: 'Todo App',
    description: 'A simple todo app',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <main>
                <Nav/>
                {children}
                <Footer/>
            </main>
        </body>
    </html>
  )
}

export default RootLayout