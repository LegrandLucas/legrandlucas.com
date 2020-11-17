const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

// // public
app.use(express.static('./public'));
// app.use(express.static('./src/assets'));

app.use(express.static('./node_modules/animejs/lib'));
app.use(express.static('./node_modules/typed.js/lib'));
app.use(express.static('./node_modules/waypoints/lib'));
app.use(express.static('./node_modules/aos/dist'));
// app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/views/index.html`);
});

app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https') res.redirect(`https://${req.header('host')}${req.url}`);
  else next();
});

app.listen(port, () => {
  console.log(`Example app is listening on port http://localhost:${port}`);
});
