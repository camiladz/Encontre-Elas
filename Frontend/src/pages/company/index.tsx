import { CompanyContent } from '../../components/company/content';
import { CompanyHeader } from '../../components/company/header';
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar-company/index';
import './index.scss'

export const Company = () => {
    const userName = "SENAC";

  return (
    <div className='companyMain'>
      <Sidebar />
      <div className='headerAndContent'>
        <Header userName={userName} />
        <CompanyHeader />
        <CompanyContent />
      </div>
    </div>
  )
}
