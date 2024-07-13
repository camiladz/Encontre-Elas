import './index.scss'
import TrilhaIcon from '../../../assets/trilha-icon.svg'
import PainelIcon from '../../../assets/painel-icon.svg'
import MentoriaIcon from '../../../assets/mentoria-icon.svg'
import PlanejamentoIcon from '../../../assets/planjemento-icon.svg'
import EstatisticaIcon from '../../../assets/estatisticas-icon.svg'

export const MenusideBar = () => {

    const MenuOptions = [
        {
            image: PainelIcon,
            title: "Painel"
        },
        {
            image: TrilhaIcon,
            title: "Trilhas"
        },
        {
            image: MentoriaIcon,
            title: "Mentorias"
        },
        {
            image: PlanejamentoIcon,
            title: "Planejamento"
        },
        {
            image: EstatisticaIcon,
            title: "Estatísticas"
        },
        {
            image: PainelIcon,
            title: "Simulador de Entrevista"
        },
        {
            image: PainelIcon,
            title: "Programa de Benefícios"
        }
    ]
    
    return (
        <div className='menuSidebar'>
            {MenuOptions.map((menu) => (
                <button className='menu__option'>
                    <img  src={menu.image}/>
                    {menu.title}
                </button>
            ))}
        </div>
    )
}

