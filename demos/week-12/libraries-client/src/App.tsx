import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavigationMenu from "./components/NavigationMenu";
import HomePage from "./pages/HomePage";
import LibrariesListPage from "./pages/LibrariesListPage";
import LibraryDetailsPage from "./pages/LibraryDetailsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/libraries" element={<LibrariesListPage />} />
          <Route path="/libraries/:id" element={<LibraryDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
