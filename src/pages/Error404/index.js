import React from 'react';

import './styles.css';
import Error from '../../assets/img/404.png';

export default function Error404() {
  return (
    <div className="container-error">
      <div className="size">
        <img src={Error} alt="404" />
        <iframe className="game" src="https://editor.p5js.org/JairoDoni/embed/ylvn1UPfS" />
      </div>
    </div>
  );
}
