const express = require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const path = require(`path`);
const PORT = 5555;

(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/zepto");
    console.log(`Database connected successfully!!!!`);
  } catch (error) {
    console.log(error);
  }
})();

const User = require(`./Schemas/userSchema.js`);

app.use(express.urlencoded({ extended: true }));

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working fine</h1>`);
});

app.get(`/users`, async (req, res) => {
  const allUsers = await User.find();
  res.send(allUsers);
});

app.get(`/users/:id`, async (req, res) => {
  const { id } = req.params;
  const singleUser = await User.findById(id);
  res.send(singleUser);
});

app.get(`/users/new`, (req, res) => {
  res.sendFile(path.resolve(__dirname, `public`, `userForm.html`));
});

app.post(`/users`, async (req, res) => {
  // const singleUser = req.body;
  // console.log(singleUser.name)
  const { name, email, phone, age } = req.body;
  const newUser = await User.create({ name, email, phone, age });
  res.send(newUser);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
