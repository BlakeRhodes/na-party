import {Component, computed, effect} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {StateService} from "../state.service";

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  inventory = computed(() => this.state.inventory().entries());
  constructor(protected state: StateService) {
    effect(() => {
      console.log(this.state.inventory().entries())
    });
  }

  update(item: any, amount: number) {
    let newAmount: number = item[1] + amount
    if (newAmount >= 0) {
      const newMap = this.state.inventory()
      newMap.set(item[0], newAmount);
      this.state.inventory.set(newMap);
      console.log(this.state.inventory())
    }
  }
}
