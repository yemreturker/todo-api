const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todosRouter = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the To-Do API!');
});

app.use('/todos', todosRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
