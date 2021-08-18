import NavBar from './nav'
import Footer from './footer'
export default function Layout({ children }) {
    return (
        <body>
            <NavBar/>
            <main>{children}</main>
            <Footer/>
        </body>
    );
}