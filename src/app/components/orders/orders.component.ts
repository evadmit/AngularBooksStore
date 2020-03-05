import { Component, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/models/OrderModels';
import { AdminManageService } from 'src/app/services/admin-manage.service';
import { MatDialog } from '@angular/material';
import { RemoveOrderDialog } from '../shared/items/dialogs/remove-order-dialog/remove-order-dialog.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Array<OrderItem>;
  reason: string;
  constructor(private admService : AdminManageService, public dialog: MatDialog) 
  { 

  }

  ngOnInit() {

    this.admService.observeOrders().subscribe((value)=> {
      this.orders = value;
    })
  }

  async getAllOrders(){

    var _orders = await this.admService.getAllOrders();
    this.orders = _orders;
  }

  cancelOrder(order: OrderItem): void {
  
    const dialogRef = this.dialog.open(RemoveOrderDialog, {
      width: '250px',
      data: {reason: this.reason, order: order}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reason = result;
    });
  }

  
  async confirmOrder(order: OrderItem): Promise<void> {
   await this.admService.confirmOrder(order);
   await this.admService.updateAllValues();
  }
}
