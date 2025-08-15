import React, { useState } from 'react';
import './AgendarAvaliacao.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function AgendarAvaliacao() {
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [horariosOcupados, setHorariosOcupados] = useState([]);

  const horariosDisponiveis = [
    '06:00', '07:00', '08:00', '09:00',
    '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00'
  ];

const buscarHorariosOcupados = async (data) => {
  try {
    const dataFormatada = data.toLocaleDateString('pt-BR'); // "13/07/2025"
    const resposta = await fetch(`http://localhost:4000/agendamentos/por-data?data=${dataFormatada}`);
    const ocupados = await resposta.json();
    setHorariosOcupados(ocupados);
  } catch (erro) {
    console.error('Erro ao buscar horários ocupados:', erro);
  }
};

const handleConfirmar = async () => {
  if (!dataSelecionada || !horarioSelecionado) {
    setMensagem('Escolha uma data e um horário.');
    return;
  }

  const email = localStorage.getItem('alunoEmail');
  const data = dataSelecionada.toLocaleDateString('pt-BR'); // "13/07/2025"

  try {
    const resposta = await fetch('http://localhost:4000/agendamentos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, data, hora: horarioSelecionado })
    });

    if (resposta.ok) {
      setMensagem('Agendamento realizado com sucesso!');
      setDataSelecionada(null);
      setHorarioSelecionado('');
      setHorariosOcupados([]);
    } else {
      setMensagem('Erro ao agendar. Tente novamente.');
    }
  } catch (erro) {
    console.error('Erro de conexão:', erro);
    setMensagem('Erro ao conectar ao servidor.');
  }
};



  return (
    <div className="container-agendamento">
      <h2>Agendar Avaliação Física</h2>

      {mensagem && <p style={{ color: 'green' }}>{mensagem}</p>}

      <label>Selecione a data:</label>
      <DatePicker
        selected={dataSelecionada}
        onChange={(date) => {
          setDataSelecionada(date);
          setHorarioSelecionado('');
          setMensagem('');
          buscarHorariosOcupados(date);
        }}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        placeholderText="Clique para escolher"
        className="react-datepicker"
      />

      {dataSelecionada && (
        <>
          <p style={{ marginTop: '20px' }}>Horários disponíveis:</p>
          <div className="grade-horarios">
            {horariosDisponiveis.map((hora) => {
              const ocupado = horariosOcupados.includes(hora);

              return (
                <button
                  key={hora}
                  onClick={() => setHorarioSelecionado(hora)}
                  className={`botao-horario ${horarioSelecionado === hora ? 'ativo' : ''}`}
                  disabled={ocupado}
                  style={{
                    opacity: ocupado ? 0.4 : 1,
                    cursor: ocupado ? 'not-allowed' : 'pointer'
                  }}
                >
                  {hora} {ocupado ? '🚫' : ''}
                </button>
              );
            })}
          </div>

          <button className="botao-confirmar" onClick={handleConfirmar}>
            Confirmar Agendamento
          </button>
        </>
      )}
    </div>
  );
}
