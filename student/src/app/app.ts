import { Component, inject, OnInit, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private http = inject(HttpClient);
  protected readonly title = "SkillFilll";
  protected students = signal<any>([])

  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/Members").subscribe({
      next: response => this.students.set(response),
      error :error => console.log(error),
      complete: () => console.log("HTTP Request Compeleted.")
    })
  }
}
