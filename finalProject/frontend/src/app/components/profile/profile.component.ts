import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent /*implements OnInit */{
  user!: User;

  constructor(private userService: UserService, public router: Router) { }
  
  ngOnInit(): void {
    this.userService.userObservable.subscribe((user: User) => {
      if (user) {
        this.user = user;
      } else {
        this.router.navigate(['/']);
      }
    });
  }  
}