const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Serveur PPSSPP Party actif ! 🎮');
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
