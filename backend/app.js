const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./users.json');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'User does not exist' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
