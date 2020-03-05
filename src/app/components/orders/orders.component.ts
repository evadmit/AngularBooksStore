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

    console.log("getAllOrders...")
    var _orders = await this.admService.getAllOrders();
    this.orders = _orders;
    console.log("all orders", this.orders)
  }

  cancelOrder(order: OrderItem): void {
    console.log('emmiter works', order)
    const dialogRef = this.dialog.open(RemoveOrderDialog, {
      width: '250px',
      data: {reason: this.reason, order: order}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reason = result;
    });
  }

  
  async confirmOrder(order: OrderItem): Promise<void> {
   this.admService.confirmOrder(order);
  }
}
