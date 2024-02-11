const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { message: '' });
});

app.post('/register', (req, res) => {
  const { password } = req.body;
  if (password.length < 8) {
    res.render('index', { message: 'Error: password is less than 8 characters' });
  } else {
    res.render('index', { message: 'Registration success' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});