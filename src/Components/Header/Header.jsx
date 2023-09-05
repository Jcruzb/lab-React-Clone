import './Header.css'

import reactLogo from '../../assets/react-logo.png'

function Header() {
    return (
        <header>
            <div className='header__img'>
                <img src={reactLogo} alt="Logo react" />
            </div>
            <div className='header__content'>
                <h1>React</h1>
                <h3>La biblioteca para interfaces de usuarios web y nativas</h3>
                <dir className="header_content_button">
                    <button className='header_content_button_blue'> Aprende React</button>
                    <button className='header_content_button_white'>Referencias de la API</button>
                </dir>
            </div>
        </header>
    )
}

export default Header;
