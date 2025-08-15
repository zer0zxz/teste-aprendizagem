const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Agendamento = require('./models/Agendamento');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rota teste
app.get('/', (req, res) => {
  res.send('API ZER0GYM RODANDO 🔥');
});
app.get('/ping', (req, res) => {
  res.send('Servidor rodando 👊');
});


app.get('/agendamentos', async (req, res) => {
  try {
    const agendamentos = await Agendamento.find().sort({ criadoEm: -1 });
    res.json(agendamentos);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar agendamentos' });
  }
});

app.post('/agendamentos', async (req, res) => {
  try {
    const { email, data, hora } = req.body;

    const novo = new Agendamento({ email, data, hora });
    await novo.save();

    res.status(201).json({ message: 'Agendamento salvo com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao salvar agendamento.' });
  }
});

app.post('/admin/login', (req, res) => {
  const { email, senha } = req.body;

  // Admin fixo para teste
  if (email === 'admin@zerogym.com' && senha === 'admin123') {
    return res.json({ sucesso: true });
  } else {
    return res.status(401).json({ erro: 'Credenciais inválidas' });
  }
});


app.get('/admin/agendamentos', async (req, res) => {
  try {
    const agendamentos = await Agendamento.find().sort({ criadoEm: -1 });
    res.json(agendamentos);
  } catch (err) {
    console.error('Erro ao buscar agendamentos para admin:', err);
    res.status(500).json({ error: 'Erro ao buscar agendamentos' });
  }
});

app.get('/agendamentos/por-data', async (req, res) => {
  const { data } = req.query;
  console.log('Data recebida:', data);

  try {
    const agendamentos = await Agendamento.find({ data });
    const horarios = agendamentos.map((a) => a.hora);
    res.json(horarios);
  } catch (err) {
    console.error('Erro:', err);
    res.status(500).json({ error: 'Erro ao buscar horários' });
  }
});

app.get('/agendamentos/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const agendamentos = await Agendamento.find({ email }).sort({ criadoEm: -1 });
    res.json(agendamentos);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar agendamentos por email' });
  }
});

app.delete('/agendamentos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Agendamento.findByIdAndDelete(id);
    res.json({ message: 'Agendamento cancelado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao cancelar agendamento' });
  }
});




console.log('✅ Rodando o index.js correto!');
// Conectar ao MongoDB (vamos configurar isso em breve)
mongoose.connect('mongodb://127.0.0.1:27017/zerogym')
  .then(() => {
    console.log('MongoDB conectado!');
    app.listen(4000, () => {
        console.log('Servidor rodando na porta 4000');
    });
  })
  .catch(err => console.error(err));
