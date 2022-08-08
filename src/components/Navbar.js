import image from './images/logo192.png';

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={image} alt="Logo" className='navbar--logo'></img>
            <ul>
                <li className="navbar--item">About</li>
                <li className="navbar--item">Projects</li>
                <li className="navbar--item">Contact</li>
            </ul>
        </div>
    )
}