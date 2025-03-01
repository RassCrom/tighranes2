import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StoryPage from "./pages/StoryPage/StoryPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SEO from './components/SEO';

function App() {
  return (
    <BrowserRouter>
      <SEO />
      <Routes>
        <Route path="/" element={<StoryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;