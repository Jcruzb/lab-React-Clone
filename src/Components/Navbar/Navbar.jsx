import './Navbar.css'

import GitHubIcon from '@mui/icons-material/GitHub';
import reactLogo from '../../assets/react-logo.png'
import CustomizedSwitches from './Switch';



function Navbar(props) {
    const {darkMode} = props
    
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={reactLogo} alt="react logo" />
            </div>
            <div className="navbar__right">
                <div className="navbar_right_links">
                    <a href='/'>Aprende</a>
                    <a href='/'>Referencia</a>
                    <a href='/'>Comunidad</a>
                    <a href='/'>Blog</a>
                </div>
                <div className="navbar_right_icons">
                    <CustomizedSwitches onClick={darkMode}/>
                    <a href=""><GitHubIcon/></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar