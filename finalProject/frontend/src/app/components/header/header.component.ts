import { Component, HostListener, OnInit } from '@angular/core';
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
  menuOpen = false;
  
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

  toggleMenu() {
      this.menuOpen = !this.menuOpen;
      const container = document.querySelector('.container');
      if (!container)
        return;
      if (this.menuOpen) {
          container.classList.add('menu-open');
      } else {
          container.classList.remove('menu-open');
      }
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const container = document.querySelector('.container');
    if (container && !container.contains(event.target as Node)) {
      this.menuOpen = false;
      container.classList.remove('menu-open');
    }
  }

}
