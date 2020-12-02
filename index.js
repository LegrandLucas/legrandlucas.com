const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

// app.get('*', (req, res, next) => {
//   if (req.headers['x-forwarded-proto'] !== 'https') res.redirect(`https://legrandlucas.com${req.url}`);
//   else next();
// });

// // public
app.use(express.static('./public'));

app.use(express.static('./node_modules/animejs/lib'));
app.use(express.static('./node_modules/typed.js/lib'));
app.use(express.static('./node_modules/waypoints/lib'));
app.use(express.static('./node_modules/aos/dist'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/views/index.html`);
});

app.listen(port, () => {
  console.log(`Example app is listening on port http://localhost:${port}`);
});
