import './index.scss'
import Logo from '../../assets/logo.svg';
import TechWoman from '../../assets/tech-woman.svg'
import { MenusideBar } from './menu';
import { SidebarBottomoptions } from './sidebarBottomOptions';

export const Sidebar = () => {
    
    return (
        <div className='sidebar'>
            <div className='logo__content'>
                <div className='logo__titleAndImage'>
                    <h1 className='logo__title'>
                        Encontre
                    </h1>
                    <img src={Logo} className='logo' />
                </div>
                <img src={TechWoman} className='techWoman_icon'/>
            </div>
            <MenusideBar />
            <SidebarBottomoptions />
        </div>
    )
}

