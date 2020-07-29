import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo AluraFlix" />
            </a>

            <Button as="a" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;