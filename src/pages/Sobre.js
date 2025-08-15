import React from 'react';
import './Home.css';

export default function Sobre() {
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
        <section id="sobre">
          <h2>Quem somos</h2>
          <p>Somos a Academia zer0 Fitness, comprometidos com saúde, qualidade de vida e transformação física.</p>
          <p>Fundada em XXXX, oferecemos estrutura moderna, profissionais qualificados e acompanhamento individualizado.</p>
        </section>
      <footer>
        <p>Academia zer0 GYM – &copy; Todos os direitos reservados</p>
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
      </footer>
    </main>
  );
}
