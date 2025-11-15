import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected accountService = inject(AccountService);
  protected credentials: any = {};

  login() {
    this.accountService.login(this.credentials).subscribe({
      next: result => {
        console.log(result);
        this.credentials = {};
      },
      error: error => alert(error.message)
    })
  }

  logout() {
    this.accountService.logout();
  }
}
