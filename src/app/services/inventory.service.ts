import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Inventory from '../models/inventory.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private dbPath = '/inventory';

  inventoryRef: AngularFireList<Inventory>;

  constructor(private db: AngularFireDatabase) {
    this.inventoryRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Inventory> {
    return this.inventoryRef;
  }

  create(tutorial: Inventory): any {
    return this.inventoryRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.inventoryRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.inventoryRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.inventoryRef.remove();
  }
}
