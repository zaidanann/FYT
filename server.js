const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Melayani file statis dari folder "public"
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/booking', (req, res) => {
  const { name, destination, date } = req.body;
  res.json({
    message: `Terima kasih, ${name}! Kamu telah memesan trip ke ${destination} pada ${date}.`
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
