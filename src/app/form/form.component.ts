import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  // Include FormsModule here
})
export class FormComponent {
  name: string = '';
  age: string = '';
  title: string = '';
  hometown: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    const userData = {
      name: this.name,
      age: this.age,
      title: this.title,
      hometown: this.hometown
    };

    this.userService.saveUserData(userData).subscribe(() => {
	  this.userService.setMessage('Person added successfully!');
      this.router.navigate(['/results']);
    });
  }
}
