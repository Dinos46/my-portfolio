import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollTop } from './ScrollTop';

export function Layout({ children }) {
    return (
        <div className="main-container">
            <Header />
            <ScrollTop />
            <main className="full main-container">
                {children}
            </main>
            <Footer />
        </div>
    )
}