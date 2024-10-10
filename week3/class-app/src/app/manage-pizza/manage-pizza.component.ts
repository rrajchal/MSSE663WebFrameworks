import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-pizza',
  templateUrl: './manage-pizza.component.html',
  styleUrls: ['./manage-pizza.component.scss']
})
export class ManagePizzaComponent implements OnInit {
  private pizzaId: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const pizzaId = "1";
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  createPizza(): void {
    fetch('/api/pizzas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ size: 'medium', toppings: [] })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Pizza created successfully!');
      })
      .catch(error => console.error('Error:', error));
  }

  listPizzas(): void {
    fetch('/api/pizzas')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Pizzas listed successfully!');
      })
      .catch(error => console.error('Error:', error));
  }

  updatePizza(): void {
    fetch(`/api/pizzas/${this.pizzaId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ size: 'large', toppings: ['pepperoni'] })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Pizza updated successfully!');
      })
      .catch(error => console.error('Error:', error));
  }

  deletePizza(): void {
    fetch(`/api/pizzas/${(this.pizzaId)}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Pizza deleted successfully!');
      })
      .catch(error => console.error('Error:', error));
  }
}
