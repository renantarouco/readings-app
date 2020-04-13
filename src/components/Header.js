import React from 'react';

function Header({ number }) {
  return (
    <header className="header">
      <h1>Minha lista de leitura!</h1>
      <p>Você tem { number } livros para ler...</p>
    </header>
  );
}

export default Header;