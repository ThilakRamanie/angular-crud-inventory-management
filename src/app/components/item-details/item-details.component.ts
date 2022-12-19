import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import Inventory from 'src/app/models/inventory.model';
import Tutorial from 'src/app/models/inventory.model';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class TutorialDetailsComponent implements OnInit, OnChanges {

  @Input() inventory?: Inventory;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentItem: Inventory = {
    name: '',
    description: '',
    amount:0,
    imageURL:'',
    category:''
  };
  message = '';

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentItem = { ...this.inventory };
  }

  // updatePublished(status: boolean): void {
  //   if (this.currentItem.key) {
  //     this.inventoryService.update(this.currentItem.key, { published: status })
  //     .then(() => {
  //       this.message = 'The status was updated successfully!';
  //     })
  //     .catch(err => console.log(err));
  //   }
  // }

  updateItem(): void {
    const data = {
      name: this.currentItem.name,
      description: this.currentItem.description,
      amount:this.currentItem.amount,
    imageURL:this.currentItem.imageURL,
    category:this.currentItem.category
    };

    if (this.currentItem.key) {
      this.inventoryService.update(this.currentItem.key, data)
        .then(() => this.message = 'The inventory was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteItem(): void {
    if (this.currentItem.key) {
      this.inventoryService.delete(this.currentItem.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The inventory was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}
