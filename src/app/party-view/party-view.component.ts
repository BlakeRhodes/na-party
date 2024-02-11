import { Component } from '@angular/core';
import {StatsComponent} from "../stats/stats.component";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {PartyHeaderComponent} from "../party-header/party-header.component";
import {CharactersSectionComponent} from "../characters-section/characters-section.component";
import {InventoryComponent} from "../inventory/inventory.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-party-view',
  standalone: true,
  imports: [
    StatsComponent,
    FormsModule,
    NgIf,
    PartyHeaderComponent,
    CharactersSectionComponent,
    InventoryComponent,
    FooterComponent
  ],
  templateUrl: './party-view.component.html',
  styleUrl: './party-view.component.css'
})
export class PartyViewComponent{}
