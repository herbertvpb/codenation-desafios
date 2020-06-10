import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

import './Topbar.scss';

const Topbar = () => (
  <header data-testid="topbar" className="topbar">
    <div className="container">
      <div className="topbar__logo">
        <LogoSvg />
      </div>
    </div>
  </header>
);

export default Topbar;
