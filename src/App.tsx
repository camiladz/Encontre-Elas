import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login'
import { Home } from './pages/home';
import { CreateAccount } from './pages/create-account';
import { Company } from './pages/company';


function App() {

  return (
      <Router>
      <div className='main'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
