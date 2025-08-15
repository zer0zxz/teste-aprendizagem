const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
  email: String,
  data: String, // EX: "13/07/2025"
  hora: String, // EX: "06:00"
  criadoEm: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Agendamento', agendamentoSchema);
