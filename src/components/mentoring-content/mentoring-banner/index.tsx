import './index.scss';

type Props = {
    BannerImage: string
}

export const MentoringBanner = ({BannerImage}: Props) => {
    return (
        <div>
            <img src={BannerImage} />
        </div>
    )
}