import React, { useEffect, useState } from 'react';

export default function MeusAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarAgendamentos() {
      try {
        const email = localStorage.getItem('alunoEmail');
        console.log('Buscando agendamentos do email:', email);

        const resposta = await fetch(`http://localhost:4000/agendamentos/${email}`);
        const dados = await resposta.json();
        console.log('Dados recebidos:', dados);

        setAgendamentos(dados);
      } catch (erro) {
        console.error('Erro ao buscar agendamentos:', erro);
      } finally {
        setCarregando(false);
      }
    }

    buscarAgendamentos();
  }, []);

function cancelarAgendamento(id) {
  if (!window.confirm('Tem certeza que deseja cancelar este agendamento?')) return;

  fetch(`http://localhost:4000/agendamentos/${id}`, {
    method: 'DELETE'
  })
    .then(res => {
      if (res.ok) {
        // Remove da tela
        setAgendamentos(prev => prev.filter(a => a._id !== id));
      } else {
        alert('Erro ao cancelar agendamento.');
      }
    })
    .catch(err => {
      console.error('Erro ao cancelar:', err);
      alert('Erro de conexão.');
    });
}


  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h2>Meus Agendamentos</h2>

      {carregando ? (
        <p>Carregando agendamentos...</p>
      ) : agendamentos.length === 0 ? (
        <p>Nenhum agendamento encontrado.</p>
      ) : (
        <ul style={{ paddingLeft: '0' }}>
          {agendamentos.map((item) => (
            <li
              key={item._id}
              style={{
                listStyle: 'none',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '10px'
              }}
            >
              <strong>Data:</strong> {item.data}<br />
              <strong>Hora:</strong> {item.hora}
               <button
                onClick={() => cancelarAgendamento(item._id)}
                style={{
                marginLeft: '10px',
                padding: '4px 8px',
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
