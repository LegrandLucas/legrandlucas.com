const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/views/pages/index.html`);
});

// public
app.use(express.static('./src/public'));
// app.use(express.static('./src/assets'));
app.use(express.static(path.join(__dirname, 'assets')));

app.use(express.static('./node_modules/animejs/lib'));
app.use(express.static('./node_modules/typed.js/lib'));
app.use(express.static('./node_modules/waypoints/lib'));
app.use(express.static('./node_modules/aos/dist'));

app.listen(port, () => {
  console.log(`Example app is listening on port http://localhost:${port}`);
});
