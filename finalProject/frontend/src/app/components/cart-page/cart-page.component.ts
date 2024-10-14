import { Component } from '@angular/core';
import { Cart } from '../../shared/Cart';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../shared/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.product.id);
  }

  changeQuantity(cartItem: CartItem, quantity: number) {
    this.cartService.changeQuantity(cartItem.product.id, quantity);
  }

  decreaseQuantity(cartItem: CartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      this.changeQuantity(cartItem, cartItem.quantity);
    }
  }

  increaseQuantity(cartItem: CartItem) {
    if (cartItem.quantity < 100) {
      cartItem.quantity++;
      this.changeQuantity(cartItem, cartItem.quantity);
    }
  }
}
