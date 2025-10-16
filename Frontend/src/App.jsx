import { Route,Routes } from 'react-router'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import Navbar from './components/Navbar.jsx'
import Navbar2 from './components/Navbar2.jsx'
import Register from './pages/Register.jsx'


const App = () => {
  return (
    <div>
      <Navbar2 />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />    
      </Routes>
    </div>
  )
}

export default App
