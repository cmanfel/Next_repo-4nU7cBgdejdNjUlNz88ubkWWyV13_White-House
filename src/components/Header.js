"use client";

import React from 'react';
import texts from '../data/texts.json';

function Header() {
  return (
    <header className="App-header">
      <h1>{texts.title}</h1>
    </header>
  );
}

export default Header;