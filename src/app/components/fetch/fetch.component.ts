import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.scss']
})
export class FetchComponent implements OnInit {

  constructor(private userService : UserService) { }
  showPassword : boolean[] = [];

  users : User[] = [];
  
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (resp) =>{        
        this.users = resp;

        for (let i = 0; i < this.users.length; i++) {
          this.showPassword[i] = false;
          this.users[i].rownumber = i;
        }

        console.log(this.users);
        console.log(this.showPassword);
      },
      (error) =>{
        console.log("Error Occured : "+error);
      }
    )
  }

  togglePassword(rowIndex : number,value : boolean) {
    this.showPassword.fill(false);
    this.showPassword[rowIndex] = value;
    console.log(this.showPassword);
  }
}
