import sedansIcon from '../assets/icon-sedans.svg';
import suvsIcon from '../assets/icon-suvs.svg';
import luxuryIcon from '../assets/icon-luxury.svg';


interface ColumnProps {
    icon: string;
    title: string;
    description: string;
    color: string;
}

function Column({ icon, title, description, color }: ColumnProps) {
    return(
        <div className={`column ${color}`}>
            <div className='box'>
                <img className='media' src={icon}/>
                <h1 className='title'>{title}</h1>
                <p className='description'>{description}</p>
            </div>
            <button className={`learn-more ${color}`}>Learn More</button>
        </div>
    )
}

export default function ThreeColumnPreview() {
    return(
        <div className='columns'>
            <Column icon={sedansIcon} title='Sedans' description='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.' color='brightOrange'/>
            <Column icon={suvsIcon} title='Suvs' description='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.' color='darkCyan'/>
            <Column icon={luxuryIcon} title='Luxury' description='Cruise in the best car brands without the bloated prices. Enjoy the enchanced comfort of a luxury rental and arrive in style.' color='veryDarkCyan'/>
        </div>
    )
}