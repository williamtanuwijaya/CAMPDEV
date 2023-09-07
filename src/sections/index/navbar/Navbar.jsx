import './navbar.css'
import './../../../index.css'
import data from './data'

const Navbar = () => {
    return (
            <nav>
                <div className="container nav_container">
                    <a href="./index.html"><h4>CampDev</h4></a>
                    <ul className='nav_menu'>
                        {
                            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
                        }
                    </ul>
                    <button id="open-menu-btn"><i data-feather="menu"></i></button>
                    <button id="close-menu-btn"><i data-feather="x"></i></button>
                </div>
            </nav>
    )
}

export default Navbar