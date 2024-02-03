import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PartyViewComponent} from "./party-view/party-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PartyViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'party';
}
