import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class ResultsComponent implements OnInit {
  userData: any;
  message: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
	this.message = this.userService.getMessage();
    this.userService.getUserData().subscribe(data => {
      this.userData = data;
    });
  }
}
