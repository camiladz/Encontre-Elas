import './App.css'
import { Header } from './components/header'
import { Sidebar } from './components/sidebar'
import { Home } from './pages/home'

function App() {

  return (
    <div className='main'>
      <Sidebar />
      <div className='headerAndContent'>
        <Header />
        <Home />
      </div>
    </div>

  )
}

export default App
