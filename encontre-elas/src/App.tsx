import './App.css'
import { MainContent } from './components/main'
import { Sidebar } from './components/sidebar'

function App() {

  return (
    <div className='main'>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
