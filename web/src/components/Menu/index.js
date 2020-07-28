import React from 'react';
import Logo from '../../assets/img/Logo.png'

import './styles.css'

import ButtonLink from './components/ButtonLink'

export default function Menu(){
  return (
    <nav className="Menu">
      <a href="/home">
        <img className="Logo" src={Logo} alt="logo" />
      </a>

      <ButtonLink className="ButtonLink" href="/">
        Novo Video
      </ButtonLink>
    </nav>
  );
}