import { Component, OnInit } from '@angular/core';
import { User } from '../modal/Modal';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
  user: User = {} as User;
  users: User[];
  progressBar = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.findUsers().subscribe(users => {
      this.users = users;
    });
  }

  addUser() {
    this.progressBar = true;
    this.userService.createUser(this.user).subscribe(user => {
      this.user = user;
      window.location.reload();
    })
  }
}
