import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/User';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartQuantity=0;
  user!:User;
  
  constructor(cartService: CartService, private userService: UserService, public router: Router) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
   }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/']);
  }

  get isAuth(){
    return this.user.token;
  }

  get isAdmin() {
    return this.user.isAdmin;
  }
}
