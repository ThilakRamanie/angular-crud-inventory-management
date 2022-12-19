import { Component, OnInit } from '@angular/core';
import Inventory from 'src/app/models/inventory.model';
import Tutorial from 'src/app/models/inventory.model';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddTutorialComponent implements OnInit {

  inventory: Inventory = new Inventory();
  submitted = false;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    console.log(Object.keys(this.inventory).length);
    if(Object.keys(this.inventory).length < 5) {
      this.submitted = false;
      return alert("Fill all the fields")
    } else {
      this.inventoryService.create(this.inventory).then(() => {
        console.log('Created new item successfully!');
        this.submitted = true;
      });
    }
    
  }

  newInventory(): void {
    this.submitted = false;
    this.inventory = new Inventory();
  }

}
