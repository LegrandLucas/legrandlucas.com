// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('src/views/pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`))

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/views/pages/index.html`);
});

// public
app.use(express.static('./src/public'));
app.use(express.static('./node_modules/animejs/lib'));
// app.use(express.static('./node_modules/aniemjs/lib'));
// app.use(express.static('./node_modules/aniemjs/lib'));

app.listen(port, () => {
  console.log(`Example app is listening on port http://localhost:${port}`);
});
