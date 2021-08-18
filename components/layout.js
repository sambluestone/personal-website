import NavBar from './nav'
import Footer from './footer'
export default function Layout({ children }) {
    return (
        <body>
            <div>
                <NavBar/>
                <main>{children}</main>
            </div>
            <Footer/>
        </body>
    );
}