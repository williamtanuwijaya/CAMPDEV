import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './navigation/MainNavigation';
// import { Index, About, CoursePage, Contac } from './navigation/MainNavigation';
// import LoginRegister from './sections/login_register/LoginRegister';
// import { Dasboard } from './navigation/LogoutNavigation';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<About />} />
        <Route path="/Course" element={<About />} />
        <Route path="/dasboard" element={<About />} />
        <Route path="/login_and_register" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
