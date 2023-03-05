import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from './components/Menu'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
const ContactPage = lazy(() => import( './pages/ContactPage' ));

const App = () => {
    return (
        <>
            <Menu />
            <div className="container">
                <Suspense fallback={<div>Please wait...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact/*" element={<ContactPage />}  />
                    </Routes>
                </Suspense>
            </div>
        </>
    );
};

export default App;