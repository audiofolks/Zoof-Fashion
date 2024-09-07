import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}

  constructor(public auth: AuthService) {}
}
