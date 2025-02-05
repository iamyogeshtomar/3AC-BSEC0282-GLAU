const express = require(`express`);
const app = express();
const path = require(`path`);
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get(`/`, (req, res) => {
  //   console.log(req);
  //   console.log(res);
  res.send(`<h1>This is home route</h1>`);
});

// app.get(`/johncena`, (req, res) => {
//   res.send(`<h1>John cena's IG page</h1>`);
// });

// Path parameters
app.get(`/params/:name/:place`, (req, res) => {
  // console.log(req.params.name);
  res.send(`<h1>I'm ${req.params.name}, and I'm from ${req.params.place}</h1>`);
});

app.get(`/query`, (req, res) => {
  console.log(req.query);
  res.send(`<h1>I'm ${req.query.name}, and I'm from ${req.query.place}</h1>`);
});

app.get(`/form`, (req, res) => {
  res.sendFile(path.resolve(__dirname, `views`, `index.html`));
});

app.post(`/form`, (req, res) => {
  // console.log(req.body);
  res.send(
    `<h1>This is ${req.body.name}, and this costs ${req.body.price} and is made by ${req.body.manufacturer}</h1>`
  );
});

// app.use((req, res) => {
//   res.send(`<h1>This is global middleware handler</h1>`);
// });

app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
