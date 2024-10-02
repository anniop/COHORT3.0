const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON requests

// In-memory array to store todos temporarily
let todos = [];

// Routes

// Get all todos (READ)
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Create a new todo (CREATE)
app.post('/todos', (req, res) => {
  const todo = {
    id: todos.length + 1, // Simple ID generation
    title: req.body.title,
    description: req.body.description
  };
  todos.push(todo);
  res.status(201).json(todo);
});

// Update a todo (UPDATE)
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  todo.title = req.body.title || todo.title;
  todo.description = req.body.description || todo.description;
  
  res.json(todo);
});

// Delete a todo (DELETE)
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.json({ message: 'Todo deleted' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
