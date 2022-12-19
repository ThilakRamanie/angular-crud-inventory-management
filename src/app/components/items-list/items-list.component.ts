import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import Inventory from 'src/app/models/inventory.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  inventories?: Inventory[];
  currentInventory?: Inventory;
  currentIndex = -1;
  title = '';

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.retrieveItems();
  }

  refreshList(): void {
    this.currentInventory = undefined;
    this.currentIndex = -1;
    this.retrieveItems();
  }

  retrieveItems(): void {
    this.inventoryService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.inventories = data;
    });
  }

  setActiveItem(tutorial: Inventory, index: number): void {
    this.currentInventory = tutorial;
    this.currentIndex = index;
  }

  removeAllItems(): void {
    this.inventoryService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }

}
