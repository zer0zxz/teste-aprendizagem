import React from 'react';
import './Home.css';

export default function Contato() {
  return (
    <main>
      <header>
        <nav>
          <h1>
            <a href="/">
            <img style={{textAlign: 'Left'}} className="image" src="logosemfundogimp.png" alt="logo da academia"/>
            </a>
          </h1>
          <div className="menu">
          <a href="/">Início</a>
          <a href="/#servicos">Planos</a>
          <a href="/login">Login</a>
          </div>
        </nav>
      </header>
            <section id="contato">
              <h2>Entre em contato</h2>
              <p>Telefone: (65) 99999-9999</p>
              <p>Email: contato@zer0fitness.com</p>
              <p>Endereço: Av. das Academias, 1000 – Várzea Grande, MT</p>
            </section>
      <footer>
        <p>Academia zer0 GYM – &copy; Todos os direitos reservados</p>
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
      </footer>
    </main>
  );
}
