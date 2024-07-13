import CardImage from '../../assets/card1.svg';

import './index.scss';

type Props = {
    title: string,
    flag: string,
    progress: number,
    image?: string
}
export const CourseCard = ({ title, flag, progress }: Props) => {
    return (
        <div className='courseCard'>
            <div className='imageAndFlag'>
                <img src={CardImage} className='card__image' />
                <span className='course__flag'>
                    {flag}
                </span>
            </div>
            <div>
                <h2 className='course__title'>
                    {title}
                </h2>
                <span className='course__description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </span>
            </div>
            <div className="progress-wrapper">
                <div className="progress-container">
                    <div className="progress-bar"></div>
                </div>
                <div className="progress-text">{progress}</div>
            </div>
            <button className='continue__button'>
                Continuar
            </button>
        </div>
    )
}