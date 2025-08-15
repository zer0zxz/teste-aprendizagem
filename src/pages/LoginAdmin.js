import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginAdmin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const resposta = await fetch('http://localhost:4000/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
      });

      if (resposta.ok) {
        localStorage.setItem('adminLogado', 'true');
        navigate('/adminagendamentos');
      } else {
        setErro('Email ou senha incorretos');
      }
    } catch (e) {
      console.error(e);
      setErro('Erro ao conectar ao servidor');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '40px' }}>
      <h2>Login do Administrador</h2>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="admin@zerogym.com"
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <label>Senha:</label>
      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="admin123"
        style={{ width: '100%', marginBottom: '20px' }}
      />

      <button onClick={handleLogin} style={{ width: '100%', padding: '10px' }}>
        Entrar
      </button>
    </div>
  );
}
