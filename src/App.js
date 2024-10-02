// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About'; // Use uppercase "About"
import Home from './pages/Home';
import Message from './pages/Message';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route index element={<About/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Explore" element={<Explore/>}/>
            <Route path="/Message" element={<Message/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
