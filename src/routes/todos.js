const express = require('express');
const router = express.Router();

let todos = [];
let currentId = 1;

router.post('/', (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ error: 'Task is required!' });
    }

    const newTodo = {
        id: currentId++,
        task,
        completed: false,
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

router.get('/', (req, res) => {
    res.json(todos);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const todo = todos.find((t) => t.id == id);
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found!' });
    }
    res.json(todo);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body;

    const todo = todos.find((t) => t.id == id);
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found!' });
    }

    if (task !== undefined) {
        todo.task = task;
    }
    if (completed !== undefined) {
        todo.completed = completed;
    }

    res.json(todo);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex((t) => t.id == id);
    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found!' });
    }

    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo);
});

module.exports = router;
