import React from 'react';
import './Aluno.css';

export default function Aluno() {
  // Simulação de dados do aluno
  const aluno = {
    nome: 'zer0',
    plano: 'Trimestral',
    validade: '2025-10-10',
    avaliacoesRestantes: 1
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>

      <div style={{textAlign: 'Center',marginTop: '50px'}}>
        <a href='/'>
        <img className="image" src="logosemfundogimp.png" alt="logo"></img>
        </a>
      </div>

      <h2>Olá, {aluno.nome} 👋</h2>

      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
        <h3>Muito bom te ver aqui!</h3>
        <p><strong>Plano:</strong> {aluno.plano}</p>
        <p><strong>Válido até:</strong> {aluno.validade}</p>
        <p><strong>Avaliações restantes:</strong> {aluno.avaliacoesRestantes}</p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <button style={botao}>Mudar de plano</button>
        <button style={botao}>Agendar avaliação</button>
        <button style={botao}>Ver histórico</button>
        <button style={botao}>Pagamentos</button>
      </div>
    </div>
  );
}

const botao = {
  marginRight: '10px',
  marginTop: '10px',
  padding: '10px 15px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer'
};
