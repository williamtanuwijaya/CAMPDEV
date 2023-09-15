import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index, About, CoursePage, Contac } from './navigation/MainNavigation';
import LoginRegister from './sections/login_register/LoginRegister';
import { Dasboard } from './navigation/LogoutNavigation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contac />} />
        <Route path="/Course" element={<CoursePage />} />
        <Route path='/dasboard' element={<Dasboard/>}/>
        <Route path="/login_and_register" element={<LoginRegister/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
