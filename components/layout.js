import NavBar from './nav'
export default function Layout({ children }) {
    return (
        <div>
            <NavBar/>
            <main>{children}</main>
        </div>
    );
}