import UserIcon from '../../assets/user-icon.svg';
import UserPoints from '../../assets/points-icon.svg'
import './indesx.scss'

export const Header = () => {
    
    return (
        <div className='header'>
            <div className='user__points'>
                <img src={UserPoints} />
                <span className='points__text'>
                    1.250 Pontos
                </span>
            </div>
            <div className='user__info'>
                <button className='user__info-button'>
                    <img src={UserIcon} />
                    Gabrielle
                </button>
            </div>
        </div>
    )
}

