import React, { useEffect, useState } from 'react';

export default function AdminAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarAgendamentos() {
      try {
        const resposta = await fetch('http://localhost:4000/agendamentos');
        const dados = await resposta.json();
        setAgendamentos(dados);
      } catch (erro) {
        console.error('Erro ao buscar agendamentos:', erro);
      } finally {
        setCarregando(false);
      }
    }

    buscarAgendamentos();
  }, []);

  async function cancelarAgendamento(id) {
    if (!window.confirm('Deseja realmente cancelar este agendamento?')) return;

    try {
      const resposta = await fetch(`http://localhost:4000/agendamentos/${id}`, {
        method: 'DELETE'
      });

      if (resposta.ok) {
        setAgendamentos(prev => prev.filter(a => a._id !== id));
      } else {
        alert('Erro ao cancelar agendamento.');
      }
    } catch (erro) {
      console.error('Erro ao cancelar:', erro);
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Painel do Administrador</h2>

      <button
        style={{
          backgroundColor: '#dc3545',
          color: 'white',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '5px',
          marginBottom: '20px',
          cursor: 'pointer'
        }}
        onClick={() => {
          localStorage.removeItem('adminLogado');
          window.location.href = '/adminlogin';
        }}
      >
        Sair
      </button>

      {carregando ? (
        <p>Carregando agendamentos...</p>
      ) : agendamentos.length === 0 ? (
        <p>Nenhum agendamento encontrado.</p>
      ) : (
        <ul style={{ paddingLeft: 0 }}>
          {agendamentos.map((item) => (
            <li key={item._id} style={{
              listStyle: 'none',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              marginBottom: '10px'
            }}>
              <strong>Email:</strong> {item.email} <br />
              <strong>Data:</strong> {item.data} <br />
              <strong>Hora:</strong> {item.hora}
              <br />
              <button
                onClick={() => cancelarAgendamento(item._id)}
                style={{
                  marginTop: '10px',
                  padding: '6px 12px',
                  backgroundColor: '#dc3545',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Cancelar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
