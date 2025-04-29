const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', require('./api/auth'));
app.use('/api/projects', require('./api/projects'));
app.use('/api/scripts', require('./api/scripts'));
app.use('/api/shots', require('./api/shots'));
app.use('/api/storyboards', require('./api/storyboards'));
app.use('/api/schedule', require('./api/schedule'));
app.use('/api/locations', require('./api/locations'));
app.use('/api/crew', require('./api/crew'));
app.use('/api/budget', require('./api/budget'));
app.use('/api/media', require('./api/media'));
app.use('/api/ai/producer', require('./api/ai'));

app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});