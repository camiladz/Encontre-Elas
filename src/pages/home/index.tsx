import { Header } from '../../components/header'
import { Sidebar } from '../../components/sidebar'
import { Dashboard } from '../dashboard'


export const Home = () => {

  return (
    <div className='main'>
      <Sidebar />
      <div className='headerAndContent'>
        <Header />
        <Dashboard />
      </div>
    </div>
  )
}
