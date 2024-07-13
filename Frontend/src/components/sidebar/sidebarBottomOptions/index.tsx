import './index.scss'
import ChatIcon from '../../../assets/chat-icon.svg'
import SettingsIcon from '../../../assets/settings-icon.svg'

export const SidebarBottomoptions = () => {
    
    return (
        <div className='sidebar__bottom'>
            <button className='bottom__option'>
                <img src={ChatIcon} />
                Mensagens
            </button>
            <button className='bottom__option'>
                <img src={SettingsIcon} />
                Configurações
            </button>
        </div>
    )
}

