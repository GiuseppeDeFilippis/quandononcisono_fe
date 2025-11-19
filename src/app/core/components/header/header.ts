import { Component, inject } from '@angular/core';
import { AdminAuth } from '../../services/admin-auth';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  auth = inject(AdminAuth);
}
