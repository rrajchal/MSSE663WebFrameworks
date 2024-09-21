import express from 'express';
import { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { PizzaService } from './src/pizzas.service';
import mongoose from 'mongoose';
import cors from "cors";

// Setup
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  credentials: true,
  origin:["http://localhost:" + PORT]
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Connect to MongoDB
connectDb();

// Routes
const pizzaService = new PizzaService();

// 
app.get('', (req, res) => {
  const pizzas = pizzaService.getAllPizzas();
  res.send("Hello Backend");
});

// Read all pizza
app.get('/api/pizzas', (req, res) => {
  console.log("Called get: /api/pizzas");
  const pizzas = pizzaService.getCreatedPizzas();

  res.send({
    msg: 'Found pizzas',
    pizzas,
  });
});

// Pizzas route
app.get('/api/pizzas/presets', (req, res) => {
  console.log("Backend app.ts.get: /api/pizzas/presets.");
  const pizzas = pizzaService.getPizzaPresets();
  res.send({
    msg: 'Found pizza presets',
    pizzas,
  });
});

// Create a new pizza
app.post('/api/pizzas/create', (req, res) => {
  const newPizza = pizzaService.createPizza(req.body);
  res.status(201).send({
    msg: 'Pizza created',
    pizza: newPizza,
  });
});

// Update a pizza by ID
app.put('/api/pizzas/:id', (req, res) => {
  const updatedPizza = pizzaService.updatePizza(req.params.id, req.body);
  if (updatedPizza) {
    res.send({
      msg: 'Pizza updated',
      pizza: updatedPizza,
    });
  } else {
    res.status(404).send({
      msg: 'Put by Id: Pizza not found',
    });
  }
});

// Delete a pizza by ID
app.delete('/api/pizzas/:id', (req, res) => {
  const deleted = pizzaService.deletePizza(req.params.id);
  if (deleted) {
    res.send({
      msg: 'Pizza deleted',
    });
  } else {
    res.status(404).send({
      msg: 'Delete: Pizza not found',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

function connectDb() {
  // mongoose instance connection
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/pizzasdb');
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', () => {
    console.log('Database Connection Successful!');
  });
}
