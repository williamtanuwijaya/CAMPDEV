import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index, About, CoursePage, Contac } from './navigation/MainNavigation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contac />} />
        <Route path="/Course" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
