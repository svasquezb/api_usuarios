const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

let data = [
    {
        usuario: 'samuel',
        email: 'svasquezb2@gmail.com',
        contraseña: 'duoc2024'
    },
    {
      usuario: 'Leo',
      email: 'leocaprile@gmail.com',
      contraseña: 'caprile'
  }
]
  
app.use(express.json());

app.get('/api/registros', (req, res) => {
  res.json(data);
});

app.post('/api/registros', (req, res) => {
  console.log('peticion POST con body', req.body);
  data.push(req.body);
  res.send('Usuario registrado');
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});