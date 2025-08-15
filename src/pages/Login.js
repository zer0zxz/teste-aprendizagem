import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    // Validação simples
    if (!email || !senha) {
      setErro('Preencha todos os campos');
      return;
    }
    // Simulação de login
    if (email === 'admin@academia.com') {
      localStorage.removeItem('planoSelecionado');
      navigate('/admin');
    } else {
      localStorage.setItem('alunoEmail', email);
      localStorage.removeItem('planoSelecionado');
      navigate('/aluno');
    }
  }
const [planoSelecionado, setPlanoSelecionado] = useState('');

useEffect(() => {
  const plano = localStorage.getItem('planoSelecionado');
  if (plano) {
    setPlanoSelecionado(plano);
  }
}, []);

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <div style={{textAlign: 'Center',marginTop: '50px'}}>
        <img className="image" src="logosemfundogimp.png" alt="logo"></img>
      </div>
      {planoSelecionado && (
  <p style={{ color: '#007bff', fontWeight: 'bold' }}>
    Você está contratando o plano: {planoSelecionado}
  </p>
)}
      <h2 style={{fontFamily: 'Segoe UI',color: 'red'}}>Login</h2>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <button type="submit" style={{color: 'white',backgroundColor: 'red', width: '100%' }}>
          Entrar
        </button>
      </form>
    </div>
  );
}
