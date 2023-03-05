import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  template: `
    <form (submit)="onSubmit()">
      <label for="Ort">Ort:</label>
      <input type="text" name="Ort" [(ngModel)]="Ort">
      <label for="Orte">Orte:</label>
      <input type="Orte" name="Orte" [(ngModel)]="Orte">
      <button type="submit">Submit</button>
    </form>
  `,
})
export class FormComponent {
  Ort:  string ="";
  Orte: string = "";

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('/api/ort', { Ort: this.Ort, Orte: this.Orte })
      .subscribe(() => {
        console.log('Ort created!');
      });
  }
}

